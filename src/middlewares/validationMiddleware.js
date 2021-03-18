function validateQuery(schema) {
  return (req, res, next) => {
    if (!req.query || !Object.keys(req.query).length) {
      return res.json({
        status: 400,
        message: 'Request query empty!',
      });
    }
    const { query } = req;
    const { error } = schema.validate(query);
    if (error) {
      console.log('ERROR', error);
      return res.json({
        status: 400,
        message: error.message || 'Query is not valid!',
      });
    }
    return next();
  };
}

function validateParams(schema) {
  return (req, res, next) => {
    if (!req.params || !Object.keys(req.params).length) {
      return res.json({
        status: 400,
        message: 'Request params empty!',
      });
    }
    const { params } = req;
    const { error } = schema.validate(params);
    if (error) {
      console.log('ERROR', error);
      return res.json({
        status: 400,
        message: error.message || 'Params are not valid!',
      });
    }
    return next();
  };
}

function validateBody(schema) {
  return (req, res, next) => {
    if (!req.body || !Object.keys(req.body).length) {
      return res.json({
        status: 400,
        message: 'Request body is empty!',
      });
    }
    const { body } = req;
    const { error } = schema.validate(body);
    if (error) {
      return res.json({
        status: 400,
        message: error.message || 'Not valid data in body!',
      });
    }
    return next();
  };
}

export default {
  validateQuery, validateBody, validateParams,
};
