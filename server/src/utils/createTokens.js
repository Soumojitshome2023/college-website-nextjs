const jwt = require("jsonwebtoken");

const createAccessToken = (id, name, username, contact, email, profileURL) => {
    const accessToken = jwt.sign(
        {
            id,
            name,
            username,
            contact,
            email,
            profileURL,
        },
        process.env.ACCESS_TOKEN_KEY
    );

    return accessToken;
};

const createRefreshToken = (id) => {
    const refreshToken = jwt.sign(
        {
            id,
        },
        process.env.REFRESH_TOKEN_KEY
    );

    return refreshToken;
};

module.exports = {
    createAccessToken,
    createRefreshToken
};
