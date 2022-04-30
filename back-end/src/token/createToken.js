const jwt = require('jsonwebtoken');
const fs = require('fs/promises');

const JWTKEY = 'jwt.evaluation.key';

const createToken = async (info) => {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  const SECRET = await fs.readFile(JWTKEY, 'utf-8');

  const token = jwt.sign(info, SECRET, jwtConfig);

  return token;
};

module.exports = createToken;
