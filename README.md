# Franz

Vive La UFM's Lex bot


# 1. Login to AWS

https://ufm-edu.signin.aws.amazon.com/console

`user:` 

`password:` located at your desktop

# 2. Create YOUR Lambda Function

Services >> Lambda >> Create Function >> Author from scratch >> Next >> 

- `Name:` VivaLaUFM_Initials
- `Description:` Feel free to put whatever
- `Runtime`: Node.js 4.3
- `Lambda Function Code:` copy paste `main.js`
- `Lambda function handler and role`: Choosee an Existing Roles -> ViveLaUFM



# 3. Create YOUR Lex bot

Services >> Lex >> Create >> Custom Bot

- `Bot name:` VivaLaUFM_Initials
- `Output voice:` Justin
- `Session Timeout:` 5 min
