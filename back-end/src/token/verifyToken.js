const jwt = require('jsonwebtoken');
const fs = require('fs/promises');

const JWTKEY = 'jwt.evaluation.key';

const verifyToken = async (token) => {
  const SECRET = await fs.readFile(JWTKEY, 'utf-8');

  const payload = jwt.verify(token, SECRET);

  return payload;
};

module.exports = verifyToken;
