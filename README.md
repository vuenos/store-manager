# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

```bash
git clone https://github.com/vuenos/store-manager.git

git init
git remote add origin https://github.com/vuenos/store-manager.git
git pull origin develop
git branch -M feature/your-branch
```


## SSO 인증 Flow

1. 서비스 URL 로 접속
2. 브라우저 storage 에 인증키(access_key) 여부 확인
3. 2 가 없으면 SSO 인증을 받을 (계정 로그인) URL 로 이동 (해당 URL 은 API 로 호출)
4. 3 의 경우 직접 Redirection 시키는 경우와 이동 링크를 제공하는 버튼을 노출시키는 경우가 있다.
5. 계정 로그인 시도
6. 5 성공시 특정 code parameter 를 받아서 1 번으로 Redirection 한다. (이 과정에서 키클락(인증 서버) 등으로 code 값 유효성 체크 후 인증받음.)
7. 인증된 code 값으로 브라우저 storage 에 access_key 값을 저장하여 로그인 성공.

