# Franz
![alt text](.imgs/logo.png) 

Vive La UFM's Lex bot


# 1. Login to AWS

https://ufm-edu.signin.aws.amazon.com/console

`user:` located at your desktop (aws.txt)

`password:` located at your desktop (aws.txt)

# 2. Create YOUR Lambda Function 

Services >> Lambda >> Create Function >> Author from scratch >> Next >> 

1. `Name:` VivaLaUFM_NameInitialsYoB
- `Description:` My lambda function Name LastName YearOfBirth
- `Runtime`: Node.js 4.3
- `Lambda Function Code:` copy paste `main.js`
- `Lambda function handler and role`: Choosee an Existing Roles -> ViveLaUFM

> [see step by step ](.imgs/lambda.md)


# 3. Create YOUR Lex bot

Services >> Lex >> Create >> Custom Bot

1. `Bot name:` VivaLaUFM_Initials
- `Output voice:` Justin
- `Session Timeout:` 5 min

> [see step by step ](.imgs/lex.md)

