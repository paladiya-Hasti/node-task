module.exports = (req, res, next) => {
  const { taskName, status } = req.body;

  if (!taskName) {
    return res.status(400).json({ error: 'Task name is required' });
  }

  if (status && !['pending', 'in-progress', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  next();
};
