curl - X POST--header 'Content-Type: application/x-www-form-urlencoded'--header 
'Accept: application/json' - d 
'grant_type=client_credentials&scope=accounts&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImhzYmMtc2FuZGJveC1lYy0xIn0.eyJpc3MiOiIyczVqOHFnYTQzcDlvYTkxYWJnaDJ2djE5byIsInN1YiI6ImxhYjEyNiIsImp0aSI6ImlkMTIzNDU2IiwiYXVkIjoiaHR0cHM6Ly9hcGkuaHNiYy5xYS54bGFicy5vbmUvYXMvdG9rZW4ub2F1dGgyIiwiaWF0IjoxNTM5NjQzMTc3LCJleHAiOjE1NDAwMDMxNzd9.v2Ph9j2Oi5t2_GizpD72Q9H0gBZNB_OdYNXbNUeE4-73Xh6xf6KxUcpRH4QqB8jikTV5z3MuYq6KWjsk0rozUg'
'https://api.hsbc.qa.xlabs.one/oauth2/as/token-client-credentials'

curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ \ 
    "iss": "2s5j8qga43p9oa91abgh2vv19o", \ 
    "sub": "lab126", \ 
    "jti": "id123456", \ 
    "aud": "https://api.hsbc.qa.xlabs.one/as/token.oauth2" \ 
  }' 'https://api.hsbc.qa.xlabs.one/oauth2/client-assertion'