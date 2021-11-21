# Config app environment variable
export NODE_ENV=development
export PORT=8888


# URL of the Mongo DB
export MONGODB_URL="mongodb://127.0.0.1:27017/mern-auth"
# export MONGODB_URL="mongodb+srv://<username>:<password>@cluster0.wqu70.mongodb.net/<database_name>?retryWrites=true&w=majority"


# JWT
# JWT secret key
export JWT_ACCESS_SECRET=123123
export JWT_REFRESH_SECRET=123123
export JWT_ACTIVATE_SECRET=123123
export JWT_RESET_PASSWORD_SECRET=10m

# JWT expirations
export JWT_ACCESS_EXPIRATION=15m
export JWT_REFRESH_EXPIRATION=30days
export JWT_RESET_PASSWORD_EXPIRATION=10m
export JWT_ACTIVATE_EXPIRATION=5m


# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=587
export SMTP_USERNAME=minhchiu.it@gmail.com
export SMTP_PASSWORD=Minh.it.01
export EMAIL_FROM=minhch.vn@gmail.com

# Token github
# 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


# GOOGLE APIS
G_CLIENT_ID=309952684179-4pj2d30jsk3hqr86n5fodk9uf7dahb7q.apps.googleusercontent.com
G_CLIENT_SECRET=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
G_REFRESH_TOKEN=1//04zDxXAWExbzfCgYIARAAGAQSNwF-L9IrtKEeQB3iWdoACbLvigcj81Kxq-QL-3-BsS3XUOD3BW8YUs4dw6fQpQLUKjFVOeQuB_w

# EMAIL
ADMIN_EMAIL=minhchiu.it@gmail.com

# CLOUDINARY 
export CLOUD_NAME=djvd6zhbg
export CLOUD_API_KEY=849999119615753
export CLOUD_API_SECRET=X_g1A1Y2E1s9bGeuFaALttvOeLg
