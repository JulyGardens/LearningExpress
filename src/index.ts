import ServerBody from "@Structure/ExpressClient";
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const Server = new ServerBody({ express: express() });

Server.initialize();
