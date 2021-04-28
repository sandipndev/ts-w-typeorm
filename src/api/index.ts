import express, { Router } from "express";

const api = Router();

api.use(express.json());

export default api;
