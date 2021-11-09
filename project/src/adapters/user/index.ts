import {RawUserInfo, UserInfo} from '../../types/user';

export const parseUserInfo = (userInfo: RawUserInfo): UserInfo => {
  return {
    id: userInfo.id,
    email: userInfo.email,
    name: userInfo.name,
    avatarUrl: userInfo['avatar_url'],
    token: userInfo.token,
  };
};
