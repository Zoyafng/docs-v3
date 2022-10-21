const BRAND_NAME_ZH_CN = 'Authing';
const BRAND_NAME_ZH_CN_LOWER_CASE = 'authing';
const BRAND_NAME_EN_US = 'Authing';
const BRAND_NAME_EN_US_LOWER_CASE = 'authing';

const DATABASE_CONNECTION_MENU_EN = {
  title: 'Custom database',
  path: '/guides/database-connection/overview.html',
  children: [
    {
      title: 'Configure database connection and scripting',
      path: '/guides/database-connection/configuration/'
    },
    {
      title: `Lazy migration of users to ${BRAND_NAME_EN_US}`,
      path: '/guides/database-connection/lazy-migration'
    },
    {
      title: 'Fully use a custom database to save user data',
      path: '/guides/database-connection/custom-user-store.md'
    },
    {
      title: 'Best Practice',
      path: '/guides/database-connection/best-practices.md'
    }
  ]
};

/**
 * 中文菜单
 */
const zhCnNavBar = {
  '/reference/': [
    {
      title: 'SDK',
      path: '/reference/sdk/',
      redirect: '/reference/sdk/java/install.html',
      children: [
        // 自动生成粘贴开始
        {
          title: 'Java',
          path: '/reference/sdk/java/',
          redirect: '/reference/sdk/java/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/java/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/java/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/java/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/java/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/java/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/java/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/java/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/java/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/java/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/java/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/java/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/java/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/java/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/java/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/java/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/java/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/java/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/java/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/java/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/java/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/java/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/java/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/java/authentication/用户资料/update-email'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/java/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/java/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/java/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/java/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/java/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/sdk/java/authentication/账号绑定/link-extidp'
                    },
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/java/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/java/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/java/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/java/authentication/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/java/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/java/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/java/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/java/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/java/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/java/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/java/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/java/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/java/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/java/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/java/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/java/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/java/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/java/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/java/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/java/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/java/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/java/authentication/cas.md'
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/java/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/java/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/java/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/java/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/java/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/java/management/管理用户/update-user'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/java/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/java/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/java/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/java/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/java/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/java/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/java/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/java/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/java/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/java/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/java/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/java/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/java/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/java/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/java/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/java/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/java/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/java/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/java/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/java/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/java/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/java/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/java/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/java/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/java/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/java/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/java/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/java/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/java/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/java/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/java/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/java/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/java/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/java/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/java/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/java/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/java/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/java/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/java/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/java/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/java/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/java/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/java/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/java/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/java/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/java/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/java/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/java/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/java/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/java/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/java/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/java/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/java/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/java/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/java/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/java/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/java/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/java/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/java/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/java/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/java/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/java/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/java/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/java/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/java/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/java/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/java/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/java/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/java/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/java/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/java/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/java/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/java/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/java/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/java/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/java/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/java/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/java/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/java/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/java/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/java/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/java/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/java/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/java/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/java/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/java/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/java/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/java/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/java/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/java/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/java/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/java/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/java/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/java/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/java/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '创建应用',
                      path: '/reference/sdk/java/management/管理应用/create-application'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/java/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/java/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/java/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/java/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/java/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/java/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/java/management/管理应用/add-application-permission-record'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/java/management/管理应用/delete-application-permission-record'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/java/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/java/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/java/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/java/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/java/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/java/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/java/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/java/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/java/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/java/management/管理身份源/enable-ext-idp-conn'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/java/management/管理身份源/association-ext-idp'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/java/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/java/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/java/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/java/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/java/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/java/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/java/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/java/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/java/management/管理消息服务/get-email-provier'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/java/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/java/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/java/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/java/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/java/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/java/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/java/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/java/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/java/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/java/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/java/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/java/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/java/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/java/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/java/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/java/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/java/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/java/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/java/management/管理-pipeline/list-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/java/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/java/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/java/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/java/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/java/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/java/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/java/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/java/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/java/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/java/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/java/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/java/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/java/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/java/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/java/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/java/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/java/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/java/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Node.js',
          path: '/reference/sdk/node/',
          redirect: '/reference/sdk/node/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/node/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/node/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/node/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/node/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/node/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/node/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/node/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/node/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/node/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/node/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/node/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/node/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/node/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/node/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/node/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/node/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/node/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/node/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/node/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/node/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/node/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/node/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/node/authentication/用户资料/update-email'
                    },
                    {
                      title: '发起修改手机号的验证请求',
                      path: '/reference/sdk/node/authentication/用户资料/verify-update-phone-request'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/node/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/node/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/node/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/node/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/node/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/sdk/node/authentication/账号绑定/link-extidp'
                    },
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/node/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/node/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/node/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/node/authentication/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/node/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/node/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/node/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/node/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/node/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/node/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/node/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/node/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/node/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/node/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/node/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/node/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/node/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/node/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/node/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/node/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/node/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/node/authentication/cas.md'
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/node/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/node/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/node/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/node/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/node/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/node/management/管理用户/update-user'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/node/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/node/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/node/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/node/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/node/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/node/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/node/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/node/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/node/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/node/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/node/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/node/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/node/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/node/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/node/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/node/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/node/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/node/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/node/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/node/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/node/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/node/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/node/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/node/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/node/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/node/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/node/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/node/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/node/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/node/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/node/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/node/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/node/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/node/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/node/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/node/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/node/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/node/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/node/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/node/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/node/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/node/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/node/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/node/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/node/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/node/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/node/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/node/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/node/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/node/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/node/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/node/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/node/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/node/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/node/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/node/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/node/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/node/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/node/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/node/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/node/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/node/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/node/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/node/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/node/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/node/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/node/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/node/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/node/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/node/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/node/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/node/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/node/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/node/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/node/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/node/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/node/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/node/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/node/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/node/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/node/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/node/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/node/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/node/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/node/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/node/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/node/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/node/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/node/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/node/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/node/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/node/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/node/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/node/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/node/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '创建应用',
                      path: '/reference/sdk/node/management/管理应用/create-application'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/node/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/node/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/node/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/node/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/node/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/node/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/node/management/管理应用/add-application-permission-record'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/node/management/管理应用/delete-application-permission-record'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/node/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/node/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/node/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/node/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/node/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/node/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/node/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/node/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/node/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/node/management/管理身份源/enable-ext-idp-conn'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/node/management/管理身份源/association-ext-idp'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/node/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/node/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/node/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/node/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/node/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/node/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/node/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/node/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/node/management/管理消息服务/get-email-provier'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/node/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/node/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/node/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/node/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/node/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/node/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/node/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/node/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/node/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/node/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/node/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/node/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/node/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/node/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/node/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/node/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/node/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/node/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/node/management/管理-pipeline/list-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/node/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/node/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/node/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/node/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/node/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/node/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/node/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/node/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/node/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/node/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/node/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/node/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/node/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/node/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/node/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/node/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/node/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/node/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Go',
          path: '/reference/sdk/go/',
          redirect: '/reference/sdk/go/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/go/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/go/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/go/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/go/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/go/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/go/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/go/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/go/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/go/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/go/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/go/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/go/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/go/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/go/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/go/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/go/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/go/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/go/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/go/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/go/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/go/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/go/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/go/authentication/用户资料/update-email'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/go/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/go/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/go/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/go/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/go/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/sdk/go/authentication/账号绑定/link-extidp'
                    },
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/go/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/go/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/go/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/go/authentication/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/go/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/go/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/go/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/go/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/go/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/go/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/go/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/go/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/go/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/go/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/go/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/go/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/go/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/go/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/go/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/go/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/go/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/go/authentication/cas.md'
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/go/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/go/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/go/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/go/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/go/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/go/management/管理用户/update-user'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/go/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/go/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/go/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/go/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/go/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/go/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/go/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/go/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/go/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/go/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/go/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/go/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/go/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/go/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/go/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/go/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/go/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/go/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/go/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/go/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/go/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/go/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/go/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/go/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/go/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/go/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/go/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/go/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/go/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/go/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/go/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/go/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/go/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/go/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/go/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/go/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/go/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/go/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/go/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/go/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/go/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/go/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/go/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/go/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/go/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/go/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/go/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/go/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/go/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/go/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/go/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/go/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/go/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/go/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/go/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/go/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/go/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/go/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/go/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/go/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/go/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/go/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/go/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/go/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/go/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/go/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/go/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/go/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/go/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/go/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/go/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/go/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/go/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/go/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/go/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/go/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/go/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/go/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/go/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/go/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/go/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/go/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/go/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/go/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/go/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/go/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/go/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/go/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/go/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/go/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/go/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/go/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/go/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/go/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/go/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '创建应用',
                      path: '/reference/sdk/go/management/管理应用/create-application'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/go/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/go/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/go/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/go/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/go/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/go/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/go/management/管理应用/add-application-permission-record'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/go/management/管理应用/delete-application-permission-record'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/go/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/go/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/go/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/go/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/go/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/go/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/go/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/go/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/go/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/go/management/管理身份源/enable-ext-idp-conn'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/go/management/管理身份源/association-ext-idp'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/go/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/go/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/go/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/go/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/go/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/go/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/go/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/go/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/go/management/管理消息服务/get-email-provier'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/go/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/go/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/go/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/go/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/go/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/go/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/go/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/go/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/go/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/go/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/go/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/go/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/go/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/go/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/go/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/go/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/go/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/go/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/go/management/管理-pipeline/list-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/go/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/go/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/go/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/go/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/go/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/go/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/go/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/go/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/go/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/go/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/go/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/go/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/go/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/go/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/go/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/go/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/go/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/go/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Python',
          path: '/reference/sdk/python/',
          redirect: '/reference/sdk/python/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/python/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/python/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/python/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/python/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/python/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/python/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/python/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/python/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/python/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/python/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/python/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/python/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/python/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/python/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/python/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/python/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/python/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/python/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/python/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/python/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/python/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/python/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/python/authentication/用户资料/update-email'
                    },
                    {
                      title: '发起修改手机号的验证请求',
                      path: '/reference/sdk/python/authentication/用户资料/verify-update-phone-request'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/python/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/python/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/python/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/python/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/python/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/sdk/python/authentication/账号绑定/link-extidp'
                    },
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/python/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/python/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/python/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/python/authentication/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/python/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/python/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/python/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/python/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/python/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/python/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/python/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/python/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/python/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/python/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/python/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/python/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/python/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/python/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/python/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/python/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/python/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/python/authentication/cas.md'
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/python/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/python/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/python/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/python/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/python/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/python/management/管理用户/update-user'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/python/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/python/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/python/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/python/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/python/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/python/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/python/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/python/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/python/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/python/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/python/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/python/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/python/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/python/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/python/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/python/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/python/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/python/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/python/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/python/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/python/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/python/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/python/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/python/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/python/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/python/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/python/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/python/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/python/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/python/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/python/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/python/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/python/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/python/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/python/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/python/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/python/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/python/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/python/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/python/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/python/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/python/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/python/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/python/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/python/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/python/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/python/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/python/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/python/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/python/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/python/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/python/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/python/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/python/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/python/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/python/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/python/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/python/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/python/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/python/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/python/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/python/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/python/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/python/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/python/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/python/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/python/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/python/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/python/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/python/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/python/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/python/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/python/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/python/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/python/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/python/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/python/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/python/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/python/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/python/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/python/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/python/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/python/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/python/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/python/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/python/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/python/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/python/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/python/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/python/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/python/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/python/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/python/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/python/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/python/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '创建应用',
                      path: '/reference/sdk/python/management/管理应用/create-application'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/python/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/python/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/python/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/python/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/python/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/python/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/python/management/管理应用/add-application-permission-record'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/python/management/管理应用/delete-application-permission-record'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/python/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/python/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/python/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/python/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/python/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/python/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/python/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/python/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/python/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/python/management/管理身份源/enable-ext-idp-conn'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/python/management/管理身份源/association-ext-idp'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/python/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/python/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/python/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/python/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/python/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/python/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/python/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/python/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/python/management/管理消息服务/get-email-provier'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/python/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/python/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/python/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/python/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/python/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/python/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/python/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/python/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/python/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/python/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/python/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/python/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/python/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/python/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/python/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/python/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/python/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/python/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/python/management/管理-pipeline/list-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/python/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/python/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/python/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/python/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/python/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/python/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/python/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/python/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/python/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/python/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/python/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/python/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/python/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/python/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/python/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/python/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/python/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/python/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'PHP',
          path: '/reference/sdk/php/',
          redirect: '/reference/sdk/php/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/php/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/php/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/php/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/php/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/php/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/php/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/php/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/php/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/php/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/php/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/php/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/php/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/php/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/php/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/php/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/php/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/php/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/php/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/php/authentication/用户资料/update-email'
                    },
                    {
                      title: '发起修改手机号的验证请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-update-phone-request'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/php/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/php/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/php/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/php/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/sdk/php/authentication/账号绑定/link-extidp'
                    },
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/php/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/php/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/php/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/php/authentication/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/php/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/php/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/php/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/php/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/php/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/php/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/php/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/php/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/php/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/php/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/php/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/php/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/php/authentication/cas.md'
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/php/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/php/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/php/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/php/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/php/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/php/management/管理用户/update-user'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/php/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/php/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/php/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/php/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/php/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/php/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/php/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/php/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/php/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/php/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/php/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/php/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/php/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/php/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/php/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/php/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/php/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/php/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/php/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/php/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/php/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/php/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/php/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/php/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/php/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/php/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/php/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/php/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/php/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/php/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/php/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/php/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/php/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/php/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/php/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/php/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/php/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/php/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/php/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/php/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/php/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/php/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/php/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/php/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/php/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/php/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/php/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/php/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/php/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/php/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/php/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/php/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/php/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/php/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/php/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/php/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/php/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/php/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/php/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/php/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/php/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/php/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/php/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/php/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/php/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/php/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/php/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/php/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/php/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/php/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/php/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/php/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/php/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/php/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/php/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/php/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/php/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/php/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/php/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/php/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/php/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/php/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/php/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/php/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/php/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/php/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/php/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/php/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/php/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/php/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/php/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/php/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/php/management/管理应用/add-application-permission-record'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/php/management/管理应用/delete-application-permission-record'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/php/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/php/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/php/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/php/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/php/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/php/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/php/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/php/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/php/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/php/management/管理身份源/enable-ext-idp-conn'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/php/management/管理身份源/association-ext-idp'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/php/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/php/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/php/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/php/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/php/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/php/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/php/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/php/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/php/management/管理消息服务/get-email-provier'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/php/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/php/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/php/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/php/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/php/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/php/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/php/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/php/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/php/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/php/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/php/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/php/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/php/management/管理-pipeline/list-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/php/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/php/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/php/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/php/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/php/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/php/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/php/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/php/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/php/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/php/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/php/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/php/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/php/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/php/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/php/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/php/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/php/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/php/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'C#',
          path: '/reference/sdk/csharp/',
          redirect: '/reference/sdk/csharp/install.html',
          children: [
            {
              title: '安装使用',
              path: '/reference/sdk/csharp/install.md'
            },
            {
              title: '用户认证模块',
              children: [
                {
                  title: '登录',
                  children: [
                    {
                      title: '账号密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-account-password.md'
                    },
                    {
                      title: '用户名密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-username-password.md'
                    },
                    {
                      title: '手机号密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-phone-password.md'
                    },
                    {
                      title: '邮箱密码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-email-password.md'
                    },
                    {
                      title: '邮箱验证码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-email-passcode.md'
                    },
                    {
                      title: '手机号验证码登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-phone-passcode.md'
                    },
                    {
                      title: 'LDAP 账号登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-ldap.md'
                    },
                    {
                      title: 'AD 账号登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-ad.md'
                    },
                    {
                      title: '使用用户凭证登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin'
                    },
                    {
                      title: '使用移动端社会化登录',
                      path: '/reference/sdk/csharp/authentication/登录/signin-by-mobile'
                    },
                    {
                      title: '获取支付宝 AuthInfo',
                      path: '/reference/sdk/csharp/authentication/登录/get-alipay-authinfo'
                    },
                    {
                      title: '生成用于登录的二维码',
                      path: '/reference/sdk/csharp/authentication/登录/gene-qrcode'
                    },
                    {
                      title: '查询二维码状态',
                      path: '/reference/sdk/csharp/authentication/登录/check-qrcode-status'
                    },
                    {
                      title: '使用二维码 ticket 换取 TokenSet',
                      path: '/reference/sdk/csharp/authentication/登录/exchange-tokenset-with-qrcode-ticket'
                    },
                    {
                      title: '自建 APP 扫码登录：APP 端修改二维码状态',
                      path: '/reference/sdk/csharp/authentication/登录/change-qrcode-status'
                    }
                  ]
                },
                {
                  title: '注册',
                  children: [
                    {
                      title: '用户名密码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-username-password.md'
                    },
                    {
                      title: '邮箱密码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-email-password.md'
                    },
                    {
                      title: '手机号验证码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-phone-passcode.md'
                    },
                    {
                      title: '邮箱验证码注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup-by-email-passcode.md'
                    },
                    {
                      title: '注册',
                      path: '/reference/sdk/csharp/authentication/注册/signup'
                    }
                  ]
                },
                {
                  title: '用户资料',
                  children: [
                    {
                      title: '获取用户资料',
                      path: '/reference/sdk/csharp/authentication/用户资料/get-profile'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-profile'
                    },
                    {
                      title: '绑定邮箱',
                      path: '/reference/sdk/csharp/authentication/用户资料/bind-email'
                    },
                    {
                      title: '解绑邮箱',
                      path: '/reference/sdk/csharp/authentication/用户资料/unbind-email'
                    },
                    {
                      title: '绑定手机号',
                      path: '/reference/sdk/csharp/authentication/用户资料/bind-phone'
                    },
                    {
                      title: '解绑手机号',
                      path: '/reference/sdk/csharp/authentication/用户资料/unbind-phone'
                    },
                    {
                      title: '获取密码强度和账号安全等级评分',
                      path: '/reference/sdk/csharp/authentication/用户资料/get-security-info'
                    },
                    {
                      title: '修改密码',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-password'
                    },
                    {
                      title: '发起修改邮箱的验证请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-update-email-request'
                    },
                    {
                      title: '修改邮箱',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-email'
                    },
                    {
                      title: '修改手机号',
                      path: '/reference/sdk/csharp/authentication/用户资料/update-phone'
                    },
                    {
                      title: '发起忘记密码请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-reset-password-request'
                    },
                    {
                      title: '忘记密码',
                      path: '/reference/sdk/csharp/authentication/用户资料/reset-password'
                    },
                    {
                      title: '发起注销账号请求',
                      path: '/reference/sdk/csharp/authentication/用户资料/verify-delete-account-request'
                    },
                    {
                      title: '注销账户',
                      path: '/reference/sdk/csharp/authentication/用户资料/delete-account'
                    }
                  ]
                },
                {
                  title: '账号绑定',
                  children: [
                    {
                      title: '绑定外部身份源',
                      path: '/reference/sdk/csharp/authentication/账号绑定/link-extidp'
                    },
                    {
                      title: '生成绑定外部身份源的链接',
                      path: '/reference/sdk/csharp/authentication/账号绑定/generate-link-extidp-url'
                    },
                    {
                      title: '解绑外部身份源',
                      path: '/reference/sdk/csharp/authentication/账号绑定/unlink-extidp'
                    },
                    {
                      title: '获取绑定的外部身份源',
                      path: '/reference/sdk/csharp/authentication/账号绑定/get-identities'
                    },
                    {
                      title: '获取应用开启的外部身份源列表',
                      path: '/reference/sdk/csharp/authentication/账号绑定/get-extidps'
                    }
                  ]
                },
                {
                  title: 'MFA 要素管理',
                  children: [
                    {
                      title: '发起绑定 MFA 认证要素请求',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/send-enroll-factor-request'
                    },
                    {
                      title: '绑定 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/enroll-factor'
                    },
                    {
                      title: '解绑 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/reset-factor'
                    },
                    {
                      title: '获取绑定的所有 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/list-enrolled-factors'
                    },
                    {
                      title: '获取绑定的某个 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/get-factor'
                    },
                    {
                      title: '获取可绑定的 MFA 认证要素',
                      path: '/reference/sdk/csharp/authentication/mfa-要素管理/list-factors-to-enroll'
                    }
                  ]
                },
                {
                  title: '用户相关资源',
                  children: [
                    {
                      title: '获取登录日志',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-login-history'
                    },
                    {
                      title: '获取登录应用',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-logged-in-apps'
                    },
                    {
                      title: '获取具备访问权限的应用',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-accessible-apps'
                    },
                    {
                      title: '获取租户列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-tenant-list'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-role-list'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-group-list'
                    },
                    {
                      title: '获取部门列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-department-list'
                    },
                    {
                      title: '获取被授权的资源列表',
                      path: '/reference/sdk/csharp/authentication/用户相关资源/get-my-authorized-resources'
                    }
                  ]
                },
                {
                  title: '消息服务',
                  children: [
                    {
                      title: '发送短信',
                      path: '/reference/sdk/csharp/authentication/消息服务/send-sms'
                    },
                    {
                      title: '发送邮件',
                      path: '/reference/sdk/csharp/authentication/消息服务/send-email'
                    }
                  ]
                },
                {
                  title: '微信相关接口',
                  children: [
                    {
                      title: '解密微信小程序数据',
                      path: '/reference/sdk/csharp/authentication/微信相关接口/decrypt-wechat-miniprogram-data'
                    },
                    {
                      title: '获取小程序的手机号',
                      path: '/reference/sdk/csharp/authentication/微信相关接口/get-wechat-miniprogram-phone'
                    },
                    {
                      title:
                        '获取 Authing 服务器缓存的微信小程序、公众号 Access Token',
                      path: '/reference/sdk/csharp/authentication/微信相关接口/get-wechat-access-token'
                    }
                  ]
                },
                {
                  title: '其他',
                  children: [
                    {
                      title: '获取服务器公开信息',
                      path: '/reference/sdk/csharp/authentication/其他/system'
                    },
                    {
                      title: '获取国家列表',
                      path: '/reference/sdk/csharp/authentication/其他/get-country-list'
                    }
                  ]
                },
                {
                  title: 'OIDC 模块',
                  path: '/reference/sdk/csharp/authentication/oidc.md'
                },
                {
                  title: 'OAuth 模块',
                  path: '/reference/sdk/csharp/authentication/oauth.md'
                },
                {
                  title: 'SAML 模块',
                  path: '/reference/sdk/csharp/authentication/saml.md'
                },
                {
                  title: 'CAS 模块',
                  path: '/reference/sdk/csharp/authentication/cas.md'
                }
              ]
            },
            {
              title: '管理模块',
              children: [
                {
                  title: '管理用户',
                  children: [
                    {
                      title: '获取用户列表',
                      path: '/reference/sdk/csharp/management/管理用户/list-users'
                    },
                    {
                      title: '获取用户信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user'
                    },
                    {
                      title: '批量获取用户信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-batch'
                    },
                    {
                      title: '创建用户',
                      path: '/reference/sdk/csharp/management/管理用户/create-user'
                    },
                    {
                      title: '批量创建用户',
                      path: '/reference/sdk/csharp/management/管理用户/create-users-batch'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/csharp/management/管理用户/update-user'
                    },
                    {
                      title: '修改用户资料',
                      path: '/reference/sdk/csharp/management/管理用户/update-user-batch'
                    },
                    {
                      title: '删除用户',
                      path: '/reference/sdk/csharp/management/管理用户/delete-users-batch'
                    },
                    {
                      title: '获取用户的外部身份源',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-identities'
                    },
                    {
                      title: '获取用户角色列表',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-roles'
                    },
                    {
                      title: '获取用户实名认证信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-principal-authentication-info'
                    },
                    {
                      title: '删除用户实名认证信息',
                      path: '/reference/sdk/csharp/management/管理用户/reset-user-principal-authentication-info'
                    },
                    {
                      title: '获取用户部门列表',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-departments'
                    },
                    {
                      title: '设置用户所在部门',
                      path: '/reference/sdk/csharp/management/管理用户/set-user-departments'
                    },
                    {
                      title: '获取用户分组列表',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-groups'
                    },
                    {
                      title: '获取用户 MFA 绑定信息',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-mfa-info'
                    },
                    {
                      title: '获取已归档的用户列表',
                      path: '/reference/sdk/csharp/management/管理用户/list-archived-users'
                    },
                    {
                      title: '强制下线用户',
                      path: '/reference/sdk/csharp/management/管理用户/kick-users'
                    },
                    {
                      title: '判断用户是否存在',
                      path: '/reference/sdk/csharp/management/管理用户/is-user-exists'
                    },
                    {
                      title: '获取用户可访问的应用',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-accessible-apps'
                    },
                    {
                      title: '获取用户授权的应用',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-authorized-apps'
                    },
                    {
                      title: '判断用户是否有某个角色',
                      path: '/reference/sdk/csharp/management/管理用户/has-any-role'
                    },
                    {
                      title: '获取用户的登录历史记录',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-login-history'
                    },
                    {
                      title: '获取用户曾经登录过的应用',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-loggedin-apps'
                    },
                    {
                      title: '获取用户曾经登录过的身份源',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-logged-in-identities'
                    },
                    {
                      title: '用户离职',
                      path: '/reference/sdk/csharp/management/管理用户/resign-user'
                    },
                    {
                      title: '批量用户离职',
                      path: '/reference/sdk/csharp/management/管理用户/resign-user-batch'
                    },
                    {
                      title: '获取用户被授权的所有资源',
                      path: '/reference/sdk/csharp/management/管理用户/get-user-authorized-resources'
                    },
                    {
                      title: '检查某个用户在应用下是否具备 Session 登录态',
                      path: '/reference/sdk/csharp/management/管理用户/check-session-status'
                    },
                    {
                      title: '导入用户的 OTP',
                      path: '/reference/sdk/csharp/management/管理用户/import-otp'
                    }
                  ]
                },
                {
                  title: '管理组织机构',
                  children: [
                    {
                      title: '获取组织机构详情',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-organization'
                    },
                    {
                      title: '批量获取组织机构详情',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-organization-batch'
                    },
                    {
                      title: '获取组织机构列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-organizations'
                    },
                    {
                      title: '创建组织机构',
                      path: '/reference/sdk/csharp/management/管理组织机构/create-organization'
                    },
                    {
                      title: '修改组织机构',
                      path: '/reference/sdk/csharp/management/管理组织机构/update-organization'
                    },
                    {
                      title: '删除组织机构',
                      path: '/reference/sdk/csharp/management/管理组织机构/delete-organization'
                    },
                    {
                      title: '搜索组织机构列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/search-organizations'
                    },
                    {
                      title: '获取部门信息',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-department'
                    },
                    {
                      title: '创建部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/create-department'
                    },
                    {
                      title: '修改部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/update-department'
                    },
                    {
                      title: '删除部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/delete-department'
                    },
                    {
                      title: '搜索部门',
                      path: '/reference/sdk/csharp/management/管理组织机构/search-departments'
                    },
                    {
                      title: '获取子部门列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-children-departments'
                    },
                    {
                      title: '获取部门成员列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-department-members'
                    },
                    {
                      title: '获取部门直属成员 ID 列表',
                      path: '/reference/sdk/csharp/management/管理组织机构/list-department-member-ids'
                    },
                    {
                      title: '搜索部门下的成员',
                      path: '/reference/sdk/csharp/management/管理组织机构/search-department-members'
                    },
                    {
                      title: '部门下添加成员',
                      path: '/reference/sdk/csharp/management/管理组织机构/add-department-members'
                    },
                    {
                      title: '部门下删除成员',
                      path: '/reference/sdk/csharp/management/管理组织机构/remove-department-members'
                    },
                    {
                      title: '获取父部门信息',
                      path: '/reference/sdk/csharp/management/管理组织机构/get-parent-department'
                    },
                    {
                      title: '判断用户是否在某个部门下',
                      path: '/reference/sdk/csharp/management/管理组织机构/is-user-in-department'
                    }
                  ]
                },
                {
                  title: '管理角色',
                  children: [
                    {
                      title: '获取角色详情',
                      path: '/reference/sdk/csharp/management/管理角色/get-role'
                    },
                    {
                      title: '分配角色',
                      path: '/reference/sdk/csharp/management/管理角色/assign-role'
                    },
                    {
                      title: '移除分配的角色',
                      path: '/reference/sdk/csharp/management/管理角色/revoke-role'
                    },
                    {
                      title: '获取角色被授权的资源列表',
                      path: '/reference/sdk/csharp/management/管理角色/get-role-authorized-resources'
                    },
                    {
                      title: '获取角色成员列表',
                      path: '/reference/sdk/csharp/management/管理角色/list-role-members'
                    },
                    {
                      title: '获取角色的部门列表',
                      path: '/reference/sdk/csharp/management/管理角色/list-role-departments'
                    },
                    {
                      title: '创建角色',
                      path: '/reference/sdk/csharp/management/管理角色/create-role'
                    },
                    {
                      title: '获取角色列表',
                      path: '/reference/sdk/csharp/management/管理角色/list-roles'
                    },
                    {
                      title: '删除角色',
                      path: '/reference/sdk/csharp/management/管理角色/delete-roles-batch'
                    },
                    {
                      title: '批量创建角色',
                      path: '/reference/sdk/csharp/management/管理角色/create-roles-batch'
                    },
                    {
                      title: '修改角色',
                      path: '/reference/sdk/csharp/management/管理角色/update-role'
                    }
                  ]
                },
                {
                  title: '管理用户分组',
                  children: [
                    {
                      title: '获取分组详情',
                      path: '/reference/sdk/csharp/management/管理用户分组/get-group'
                    },
                    {
                      title: '获取分组列表',
                      path: '/reference/sdk/csharp/management/管理用户分组/list-groups'
                    },
                    {
                      title: '创建分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/create-group'
                    },
                    {
                      title: '批量创建分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/create-groups-batch'
                    },
                    {
                      title: '修改分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/update-group'
                    },
                    {
                      title: '批量删除分组',
                      path: '/reference/sdk/csharp/management/管理用户分组/delete-groups-batch'
                    },
                    {
                      title: '添加分组成员',
                      path: '/reference/sdk/csharp/management/管理用户分组/add-group-members'
                    },
                    {
                      title: '批量移除分组成员',
                      path: '/reference/sdk/csharp/management/管理用户分组/remove-group-members'
                    },
                    {
                      title: '获取分组成员列表',
                      path: '/reference/sdk/csharp/management/管理用户分组/list-group-members'
                    },
                    {
                      title: '获取分组被授权的资源列表',
                      path: '/reference/sdk/csharp/management/管理用户分组/get-group-authorized-resources'
                    }
                  ]
                },
                {
                  title: '管理自定义字段',
                  children: [
                    {
                      title: '获取用户内置字段列表',
                      path: '/reference/sdk/csharp/management/管理自定义字段/get-user-base-fields'
                    },
                    {
                      title: '修改用户内置字段配置',
                      path: '/reference/sdk/csharp/management/管理自定义字段/set-user-base-fields'
                    },
                    {
                      title: '获取自定义字段列表',
                      path: '/reference/sdk/csharp/management/管理自定义字段/get-custom-fields'
                    },
                    {
                      title: '创建/修改自定义字段定义',
                      path: '/reference/sdk/csharp/management/管理自定义字段/set-custom-fields'
                    },
                    {
                      title: '设置自定义字段的值',
                      path: '/reference/sdk/csharp/management/管理自定义字段/set-custom-data'
                    },
                    {
                      title: '获取用户、分组、角色、组织机构的自定义字段值',
                      path: '/reference/sdk/csharp/management/管理自定义字段/get-custom-data'
                    }
                  ]
                },
                {
                  title: '管理资源与权限',
                  children: [
                    {
                      title: '创建资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-resource'
                    },
                    {
                      title: '批量创建资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-resources-batch'
                    },
                    {
                      title: '获取资源详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-resource'
                    },
                    {
                      title: '批量获取资源详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-resources-batch'
                    },
                    {
                      title: '分页获取资源列表',
                      path: '/reference/sdk/csharp/management/管理资源与权限/list-resources'
                    },
                    {
                      title: '修改资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/update-resource'
                    },
                    {
                      title: '删除资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-resource'
                    },
                    {
                      title: '批量删除资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-resources-batch'
                    },
                    {
                      title: '关联/取消关联应用资源到租户',
                      path: '/reference/sdk/csharp/management/管理资源与权限/associate-tenant-resource'
                    },
                    {
                      title: '创建权限分组',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-namespace'
                    },
                    {
                      title: '批量创建权限分组',
                      path: '/reference/sdk/csharp/management/管理资源与权限/create-namespaces-batch'
                    },
                    {
                      title: '获取权限分组详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-namespace'
                    },
                    {
                      title: '批量获取权限分组详情',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-namespaces-batch'
                    },
                    {
                      title: '修改权限分组信息',
                      path: '/reference/sdk/csharp/management/管理资源与权限/update-namespace'
                    },
                    {
                      title: '删除权限分组信息',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-namespace'
                    },
                    {
                      title: '批量删除权限分组',
                      path: '/reference/sdk/csharp/management/管理资源与权限/delete-namespaces-batch'
                    },
                    {
                      title: '授权资源',
                      path: '/reference/sdk/csharp/management/管理资源与权限/authorize-resources'
                    },
                    {
                      title: '获取某个主体被授权的资源列表',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-authorized-resources'
                    },
                    {
                      title: '判断用户是否对某个资源的某个操作有权限',
                      path: '/reference/sdk/csharp/management/管理资源与权限/is-action-allowed'
                    },
                    {
                      title: '获取资源被授权的主体',
                      path: '/reference/sdk/csharp/management/管理资源与权限/get-resource-authorized-targets'
                    }
                  ]
                },
                {
                  title: '管理应用',
                  children: [
                    {
                      title: '获取应用详情',
                      path: '/reference/sdk/csharp/management/管理应用/get-application'
                    },
                    {
                      title: '获取应用列表',
                      path: '/reference/sdk/csharp/management/管理应用/list-applications'
                    },
                    {
                      title: '获取应用简单信息',
                      path: '/reference/sdk/csharp/management/管理应用/get-application-simple-info'
                    },
                    {
                      title: '获取应用简单信息列表',
                      path: '/reference/sdk/csharp/management/管理应用/list-application-simple-info'
                    },
                    {
                      title: '删除应用',
                      path: '/reference/sdk/csharp/management/管理应用/delete-application'
                    },
                    {
                      title: '获取应用密钥',
                      path: '/reference/sdk/csharp/management/管理应用/get-application-secret'
                    },
                    {
                      title: '刷新应用密钥',
                      path: '/reference/sdk/csharp/management/管理应用/refresh-application-secret'
                    },
                    {
                      title: '获取应用当前登录用户',
                      path: '/reference/sdk/csharp/management/管理应用/list-application-active-users'
                    },
                    {
                      title: '获取应用默认访问授权策略',
                      path: '/reference/sdk/csharp/management/管理应用/get-application-permission-strategy'
                    },
                    {
                      title: '更新应用默认访问授权策略',
                      path: '/reference/sdk/csharp/management/管理应用/update-application-permission-strategy'
                    },
                    {
                      title: '授权应用访问权限',
                      path: '/reference/sdk/csharp/management/管理应用/add-application-permission-record'
                    },
                    {
                      title: '删除应用访问授权记录',
                      path: '/reference/sdk/csharp/management/管理应用/delete-application-permission-record'
                    },
                    {
                      title: '检测域名是否可用',
                      path: '/reference/sdk/csharp/management/管理应用/check-domain-available'
                    }
                  ]
                },
                {
                  title: '管理身份源',
                  children: [
                    {
                      title: '获取身份源列表',
                      path: '/reference/sdk/csharp/management/管理身份源/list-ext-idp'
                    },
                    {
                      title: '获取身份源详情',
                      path: '/reference/sdk/csharp/management/管理身份源/get-ext-idp'
                    },
                    {
                      title: '创建身份源',
                      path: '/reference/sdk/csharp/management/管理身份源/create-ext-idp'
                    },
                    {
                      title: '更新身份源配置',
                      path: '/reference/sdk/csharp/management/管理身份源/update-ext-idp'
                    },
                    {
                      title: '删除身份源',
                      path: '/reference/sdk/csharp/management/管理身份源/delete-ext-idp'
                    },
                    {
                      title: '在某个已有身份源下创建新连接',
                      path: '/reference/sdk/csharp/management/管理身份源/create-ext-idp-conn'
                    },
                    {
                      title: '更新身份源连接',
                      path: '/reference/sdk/csharp/management/管理身份源/update-ext-idp-conn'
                    },
                    {
                      title: '删除身份源连接',
                      path: '/reference/sdk/csharp/management/管理身份源/delete-ext-idp-conn'
                    },
                    {
                      title: '身份源连接开关',
                      path: '/reference/sdk/csharp/management/管理身份源/enable-ext-idp-conn'
                    },
                    {
                      title: '租户关联身份源',
                      path: '/reference/sdk/csharp/management/管理身份源/association-ext-idp'
                    },
                    {
                      title: '租户控制台获取身份源列表',
                      path: '/reference/sdk/csharp/management/管理身份源/list-tenant-ext-idp'
                    },
                    {
                      title: '身份源下应用的连接详情',
                      path: '/reference/sdk/csharp/management/管理身份源/ext-idp-conn-apps'
                    }
                  ]
                },
                {
                  title: '管理安全配置',
                  children: [
                    {
                      title: '获取安全配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/update-security-settings'
                    },
                    {
                      title: '获取全局多因素认证配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/get-global-mfa-settings'
                    },
                    {
                      title: '修改全局多因素认证配置',
                      path: '/reference/sdk/csharp/management/管理安全配置/update-global-mfa-settings'
                    }
                  ]
                },
                {
                  title: '管理消息服务',
                  children: [
                    {
                      title: '获取邮件模版列表',
                      path: '/reference/sdk/csharp/management/管理消息服务/get-email-templates'
                    },
                    {
                      title: '修改邮件模版',
                      path: '/reference/sdk/csharp/management/管理消息服务/update-email-template'
                    },
                    {
                      title: '预览邮件模版',
                      path: '/reference/sdk/csharp/management/管理消息服务/preview-email-template'
                    },
                    {
                      title: '获取第三方邮件服务配置',
                      path: '/reference/sdk/csharp/management/管理消息服务/get-email-provier'
                    },
                    {
                      title: '配置第三方邮件服务',
                      path: '/reference/sdk/csharp/management/管理消息服务/config-email-provier'
                    }
                  ]
                },
                {
                  title: '管理同步中心',
                  children: [
                    {
                      title: '获取同步任务详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/get-sync-task'
                    },
                    {
                      title: '获取同步任务列表',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-tasks'
                    },
                    {
                      title: '创建同步任务',
                      path: '/reference/sdk/csharp/management/管理同步中心/create-sync-task'
                    },
                    {
                      title: '修改同步任务',
                      path: '/reference/sdk/csharp/management/管理同步中心/update-sync-task'
                    },
                    {
                      title: '执行同步任务',
                      path: '/reference/sdk/csharp/management/管理同步中心/trigger-sync-task'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/get-sync-job'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-jobs'
                    },
                    {
                      title: '获取同步作业详情',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-job-logs'
                    },
                    {
                      title: '获取同步风险操作列表',
                      path: '/reference/sdk/csharp/management/管理同步中心/list-sync-risk-operations'
                    },
                    {
                      title: '执行同步风险操作',
                      path: '/reference/sdk/csharp/management/管理同步中心/trigger-sync-risk-operations'
                    },
                    {
                      title: '取消同步风险操作',
                      path: '/reference/sdk/csharp/management/管理同步中心/cancel-sync-risk-operation'
                    }
                  ]
                },
                {
                  title: '管理 Pipeline',
                  children: [
                    {
                      title: '创建 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/create-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数详情',
                      path: '/reference/sdk/csharp/management/管理-pipeline/get-pipeline-function'
                    },
                    {
                      title: '重新上传 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/reupload-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/update-pipeline-function'
                    },
                    {
                      title: '修改 Pipeline 函数顺序',
                      path: '/reference/sdk/csharp/management/管理-pipeline/update-pipeline-order'
                    },
                    {
                      title: '删除 Pipeline 函数',
                      path: '/reference/sdk/csharp/management/管理-pipeline/delete-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 函数列表',
                      path: '/reference/sdk/csharp/management/管理-pipeline/list-pipeline-function'
                    },
                    {
                      title: '获取 Pipeline 日志',
                      path: '/reference/sdk/csharp/management/管理-pipeline/get-pipeline-logs'
                    }
                  ]
                },
                {
                  title: '管理 Webhook',
                  children: [
                    {
                      title: '创建 Webhook',
                      path: '/reference/sdk/csharp/management/管理-webhook/create-webhook'
                    },
                    {
                      title: '获取 Webhook 列表',
                      path: '/reference/sdk/csharp/management/管理-webhook/list-webhooks'
                    },
                    {
                      title: '修改 Webhook 配置',
                      path: '/reference/sdk/csharp/management/管理-webhook/update-webhook'
                    },
                    {
                      title: '删除 Webhook',
                      path: '/reference/sdk/csharp/management/管理-webhook/delete-webhook'
                    },
                    {
                      title: '获取 Webhook 日志',
                      path: '/reference/sdk/csharp/management/管理-webhook/get-webhook-logs'
                    },
                    {
                      title: '手动触发 Webhook 执行',
                      path: '/reference/sdk/csharp/management/管理-webhook/trigger-webhook'
                    },
                    {
                      title: '获取 Webhook 详情',
                      path: '/reference/sdk/csharp/management/管理-webhook/get-webhook'
                    },
                    {
                      title: '获取 Webhook 事件列表',
                      path: '/reference/sdk/csharp/management/管理-webhook/get-webhook-event-list'
                    }
                  ]
                },
                {
                  title: '获取审计日志',
                  children: [
                    {
                      title: '获取用户行为日志',
                      path: '/reference/sdk/csharp/management/获取审计日志/get-user-action-logs'
                    },
                    {
                      title: '获取管理员操作日志',
                      path: '/reference/sdk/csharp/management/获取审计日志/get-admin-audit-logs'
                    }
                  ]
                },
                {
                  title: '管理计量计费',
                  children: [
                    {
                      title: '获取套餐详情',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-current-package-info'
                    },
                    {
                      title: '获取用量详情',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-usage-info'
                    },
                    {
                      title: '获取 MAU 使用记录',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-mau-period-usage-history'
                    },
                    {
                      title: '获取所有权益',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-all-rights-items'
                    },
                    {
                      title: '获取订单列表',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-orders'
                    },
                    {
                      title: '获取订单详情',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-order-detail'
                    },
                    {
                      title: '获取订单支付明细',
                      path: '/reference/sdk/csharp/management/管理计量计费/get-order-pay-detail'
                    }
                  ]
                }
              ]
            }
          ]
        },
        // 自动生成粘贴结束
        {
          title: 'Android',
          path: '/reference/mobile/sdk-for-android/',
          children: [
            {
              title: '快速开始',
              path: '/reference/mobile/sdk-for-android/quick'
            },
            {
              title: '托管页',
              path: '/reference/mobile/sdk-for-android/develop'
            },
            {
              title: '超组件',
              path: '/reference/mobile/sdk-for-android/component/',
              children: [
                {
                  title: '教程',
                  children: [
                    '/reference/mobile/sdk-for-android/component/tutorial/example',
                    '/reference/mobile/sdk-for-android/component/tutorial/basic-login',
                    '/reference/mobile/sdk-for-android/component/tutorial/advanced-login',
                    '/reference/mobile/sdk-for-android/component/tutorial/refine-login',
                    '/reference/mobile/sdk-for-android/component/tutorial/basic-register',
                    '/reference/mobile/sdk-for-android/component/tutorial/advanced-register',
                    '/reference/mobile/sdk-for-android/component/tutorial/login-to-register',
                    '/reference/mobile/sdk-for-android/component/tutorial/reset-password-by-phone',
                    '/reference/mobile/sdk-for-android/component/tutorial/reset-password-by-email',
                    '/reference/mobile/sdk-for-android/component/tutorial/reset-password-all'
                  ]
                },
                {
                  title: '基础组件',
                  children: [
                    {
                      title: '应用图标',
                      path: '/reference/mobile/sdk-for-android/component/basic/app-logo'
                    },
                    {
                      title: '应用名称',
                      path: '/reference/mobile/sdk-for-android/component/basic/app-name'
                    },
                    {
                      title: '帐号输入框',
                      path: '/reference/mobile/sdk-for-android/component/basic/account-edit-text'
                    },
                    {
                      title: '密码输入框',
                      path: '/reference/mobile/sdk-for-android/component/basic/password-edit-text'
                    },
                    {
                      title: '密码确认输入框',
                      path: '/reference/mobile/sdk-for-android/component/basic/password-confirm-edit-text'
                    },
                    {
                      title: '电话号码输入框',
                      path: '/reference/mobile/sdk-for-android/component/basic/phonenumber-edit-text'
                    },
                    {
                      title: '验证码输入框',
                      path: '/reference/mobile/sdk-for-android/component/basic/verifycode-edit-text'
                    },
                    {
                      title: '获取短信验证码按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/get-verifycode-button'
                    },
                    {
                      title: '邮箱输入框',
                      path: '/reference/mobile/sdk-for-android/component/basic/email-edit-text'
                    },
                    {
                      title: '获取邮箱验证码按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/get-emailcode-button'
                    },
                    {
                      title: '登录按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/login-button'
                    },
                    {
                      title: '错误文本',
                      path: '/reference/mobile/sdk-for-android/component/basic/error-text'
                    },
                    {
                      title: '登录方式切换栏',
                      path: '/reference/mobile/sdk-for-android/component/basic/login-method-tab'
                    },
                    {
                      title: '登录容器',
                      path: '/reference/mobile/sdk-for-android/component/basic/login-container'
                    },
                    {
                      title: '隐私协议',
                      path: '/reference/mobile/sdk-for-android/component/basic/privacy-confirm-box'
                    },
                    {
                      title: '注册按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/register-button'
                    },
                    {
                      title: '注册方式切换栏',
                      path: '/reference/mobile/sdk-for-android/component/basic/register-method-tab'
                    },
                    {
                      title: '注册容器',
                      path: '/reference/mobile/sdk-for-android/component/basic/register-container'
                    },
                    {
                      title: '跳转注册按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/go-register-button'
                    },
                    {
                      title: '跳转登录按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/go-login-button'
                    },
                    {
                      title: '跳转忘记密码按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/go-forgot-password-button'
                    },
                    {
                      title: '跳转问题反馈按钮',
                      path: '/reference/mobile/sdk-for-android/component/basic/go-feedback-button'
                    }
                  ]
                },
                {
                  title: '社会化组件',
                  children: [
                    {
                      title: '社会化登录列表',
                      path: '/reference/mobile/sdk-for-android/component/social/social-login-listview'
                    }
                  ]
                }
              ]
            },
            {
              title: 'APIs',
              path: '/reference/mobile/sdk-for-android/apis/',
              children: [
                '/reference/mobile/sdk-for-android/apis/authentication/',
                '/reference/mobile/sdk-for-android/apis/protocol/',
                '/reference/mobile/sdk-for-android/apis/mfa/',
                '/reference/mobile/sdk-for-android/apis/scan/'
              ]
            },
            {
              title: '社会化登录',
              path: '/reference/mobile/sdk-for-android/social/',
              children: [
                '/reference/mobile/sdk-for-android/social/wechat',
                '/reference/mobile/sdk-for-android/social/wecom',
                '/reference/mobile/sdk-for-android/social/alipay',
                '/reference/mobile/sdk-for-android/social/lark',
                '/reference/mobile/sdk-for-android/social/oneauth'
              ]
            },
            {
              title: '典型场景',
              path: '/reference/mobile/sdk-for-android/scenario/',
              children: [
                '/reference/mobile/sdk-for-android/scenario/logout',
                '/reference/mobile/sdk-for-android/scenario/splash',
                '/reference/mobile/sdk-for-android/scenario/tokens',
                '/reference/mobile/sdk-for-android/scenario/user-profile',
                '/reference/mobile/sdk-for-android/scenario/webview'
              ]
            },
            {
              title: '私有化部署',
              path: '/reference/mobile/sdk-for-android/onpremise'
            },
            {
              title: '版本历史',
              path: '/reference/mobile/sdk-for-android/version'
            }
          ]
        },
        {
          title: 'Flutter',
          path: '/reference/mobile/sdk-for-flutter/',
          children: [
            {
              title: '快速开始',
              path: '/reference/mobile/sdk-for-flutter/develop'
            },
            {
              title: 'APIs',
              children: [
                '/reference/mobile/sdk-for-flutter/authentication/',
                '/reference/mobile/sdk-for-flutter/protocol/',
                '/reference/mobile/sdk-for-flutter/mfa/',
                '/reference/mobile/sdk-for-flutter/scan/',
                '/reference/mobile/sdk-for-flutter/social/'
              ]
            },
            {
              title: '私有化部署',
              path: '/reference/mobile/sdk-for-flutter/onpremise'
            }
          ]
        },
        {
          title: 'iOS',
          path: '/reference/mobile/sdk-for-ios/',
          children: [
            {
              title: '快速开始',
              path: '/reference/mobile/sdk-for-ios/quick'
            },
            {
              title: '托管页',
              path: '/reference/mobile/sdk-for-ios/develop'
            },
            {
              title: '超组件',
              path: '/reference/mobile/sdk-for-ios/component/',
              children: [
                {
                  title: '教程',
                  children: [
                    '/reference/mobile/sdk-for-ios/component/tutorial/example',
                    '/reference/mobile/sdk-for-ios/component/tutorial/basic-login',
                    '/reference/mobile/sdk-for-ios/component/tutorial/advanced-login',
                    '/reference/mobile/sdk-for-ios/component/tutorial/refine-login',
                    '/reference/mobile/sdk-for-ios/component/tutorial/basic-register',
                    '/reference/mobile/sdk-for-ios/component/tutorial/advanced-register',
                    '/reference/mobile/sdk-for-ios/component/tutorial/login-to-register',
                    '/reference/mobile/sdk-for-ios/component/tutorial/reset-password-by-phone',
                    '/reference/mobile/sdk-for-ios/component/tutorial/reset-password-by-email',
                    '/reference/mobile/sdk-for-ios/component/tutorial/reset-password-all'
                  ]
                },
                {
                  title: '基础组件',
                  children: [
                    {
                      title: '应用图标',
                      path: '/reference/mobile/sdk-for-ios/component/basic/app-logo'
                    },
                    {
                      title: '应用名称',
                      path: '/reference/mobile/sdk-for-ios/component/basic/app-name'
                    },
                    {
                      title: '帐号输入框',
                      path: '/reference/mobile/sdk-for-ios/component/basic/account-textfield'
                    },
                    {
                      title: '密码输入框',
                      path: '/reference/mobile/sdk-for-ios/component/basic/password-textfield'
                    },
                    {
                      title: '邮箱输入框',
                      path: '/reference/mobile/sdk-for-ios/component/basic/email-textfield'
                    },
                    {
                      title: '电话号码输入框',
                      path: '/reference/mobile/sdk-for-ios/component/basic/phonenumber-textfield'
                    },
                    {
                      title: '验证码输入框',
                      path: '/reference/mobile/sdk-for-ios/component/basic/verifycode-textfield'
                    },
                    {
                      title: '获取验证码按钮',
                      path: '/reference/mobile/sdk-for-ios/component/basic/get-verifycode-button'
                    },
                    {
                      title: '登录按钮',
                      path: '/reference/mobile/sdk-for-ios/component/basic/login-button'
                    },
                    {
                      title: '错误文本',
                      path: '/reference/mobile/sdk-for-ios/component/basic/error-label'
                    },
                    {
                      title: '登录方式切换栏',
                      path: '/reference/mobile/sdk-for-ios/component/basic/login-method-tab'
                    },
                    {
                      title: '登录容器',
                      path: '/reference/mobile/sdk-for-ios/component/basic/login-container'
                    },
                    {
                      title: '隐私协议',
                      path: '/reference/mobile/sdk-for-ios/component/basic/privacy-confirm-box'
                    },
                    {
                      title: '注册按钮',
                      path: '/reference/mobile/sdk-for-ios/component/basic/register-button'
                    },
                    {
                      title: '注册方式切换栏',
                      path: '/reference/mobile/sdk-for-ios/component/basic/register-method-tab'
                    },
                    {
                      title: '注册容器',
                      path: '/reference/mobile/sdk-for-ios/component/basic/register-container'
                    },
                    {
                      title: '跳转注册按钮',
                      path: '/reference/mobile/sdk-for-ios/component/basic/go-register-button'
                    }
                  ]
                },
                {
                  title: '社会化组件',
                  children: [
                    {
                      title: '社会化登录列表',
                      path: '/reference/mobile/sdk-for-ios/component/social/social-login-listview'
                    }
                  ]
                }
              ]
            },
            {
              title: 'APIs',
              path: '/reference/mobile/sdk-for-ios/apis/',
              children: [
                '/reference/mobile/sdk-for-ios/apis/authentication/',
                '/reference/mobile/sdk-for-ios/apis/protocol/',
                '/reference/mobile/sdk-for-ios/apis/mfa/',
                '/reference/mobile/sdk-for-ios/apis/scan/',
                '/reference/mobile/sdk-for-ios/apis/util/'
              ]
            },
            {
              title: '社会化登录',
              path: '/reference/mobile/sdk-for-ios/social/',
              children: [
                '/reference/mobile/sdk-for-ios/social/wechat',
                '/reference/mobile/sdk-for-ios/social/wecom',
                '/reference/mobile/sdk-for-ios/social/lark',
                '/reference/mobile/sdk-for-ios/social/apple',
                '/reference/mobile/sdk-for-ios/social/oneauth'
              ]
            },
            {
              title: '典型场景',
              path: '/reference/mobile/sdk-for-ios/scenario/',
              children: [
                '/reference/mobile/sdk-for-ios/scenario/tokens',
                '/reference/mobile/sdk-for-ios/scenario/webview',
                '/reference/mobile/sdk-for-ios/scenario/logout',
                '/reference/mobile/sdk-for-ios/scenario/splash'
              ]
            },
            {
              title: '私有化部署',
              path: '/reference/mobile/sdk-for-ios/onpremise'
            }
          ]
        },
        {
          title: '微信小程序',
          path: '/reference/miniapp/',
          children: [
            {
              title: '快速开始',
              path: '/reference/miniapp/quick'
            }
          ]
        }
      ]
    },
    {
      title: 'API',
      path: '/reference/api/',
      children: [
        {
          title: 'API',
          path: '/reference/api/'
        }
      ]
    }
  ]
};

/**
 * 英文菜单
 */
const translatedZhCnNavBar = {};

const addPrefixToLink = (navbar, prefix) => {
  if (!navbar) {
    return;
  }
  return navbar.map((item) => ({
    ...item,
    path: item.path && `${prefix}${item.path}`,
    children:
      item.children &&
      item.children.map((link) => {
        if (typeof link === 'string') {
          return `${prefix}${link}`;
        }
        return {
          ...link,
          path: `${prefix}${link.path}`,
          children: addPrefixToLink(link.children, prefix)
        };
      })
  }));
};

/**
 * 给所有路径加上 /en
 */
const getEnUsNavBar = (sidebars) => {
  const enUsNavBar = {};

  for (let attr in sidebars) {
    enUsNavBar[`/en${attr}`] = addPrefixToLink(sidebars[attr], '/en');
  }

  return enUsNavBar;
};

module.exports = {
  zhCnNavBar,
  enUsNavBar: getEnUsNavBar(translatedZhCnNavBar),
  BRAND_NAME_ZH_CN,
  BRAND_NAME_EN_US
};
