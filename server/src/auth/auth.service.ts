import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { GorderUserData, UserInfo } from "./UserInfo";
import { UserService } from "../user/user.service";
import { User } from "src/user/base/User";
import { HttpService } from "@nestjs/axios"; // Make sure to use this import
import { AxiosResponse } from "axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly httpService: HttpService // Injecting the HttpService from @nestjs/axios
  ) {}

  async validateUser(username: string, password: string): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(credentials.username, credentials.password);
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });

    let data = {
      username,
      password,
      loginDevice: 1,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await firstValueFrom(this.httpService.post("https://api.gorder.co.il/users/authenticateApp", data, { headers }));

    const gorderUser = response.data;
    // if (response.status !== 200 || !response.data?.accessToken) {
    //   throw new UnauthorizedException("Failed to authenticate against the second backend");
    // }

    // Constructing gorderUserData object
    const gorderUserData: GorderUserData = {
      userId: response.data.userId,
      permissions: response.data.permissions,
      type: response.data.type,
      orgId: response.data.orgId,
      orgName: response.data.orgName,
      orgLogo: response.data.orgLogo,
      primaryColor: response.data.primaryColor,
      employeeId: response.data.employeeId,
      imgPath: response.data.imgPath,
      fullname: response.data.fullname,
    };

    return {
      ...user,
      accessToken,
      gorderAccessToken: response.data.token,
      gorderUserData,
    };
  }
  async me(authorization: string = ""): Promise<User> {
    const bearer = authorization.replace(/^Bearer\s/, "");
    const username = this.tokenService.decodeToken(bearer);
    const result = await this.userService.findOne({
      where: { username },
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
        businesses: {
          select: {
            id: true,
            documents: {
              select: {
                id: true,
              },
            },
            items: {
              select: {
                id: true,
              },
            },
            clientsAndSuppliers: {
              select: {
                id: true,
              },
            },
            settings: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });
    if (!result) {
      throw new NotFoundException(`No resource was found for ${username}`);
    }

    return result;
  }
}
