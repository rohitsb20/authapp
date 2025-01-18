import express from 'express';

const router = express.Router();

router.post("/auth", (req, res) => {
  console.log(req.body);
  
});

export default router;