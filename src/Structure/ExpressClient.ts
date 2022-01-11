import { Express } from "express";
import { ServerOptions } from "@Shared/types";

export default class ServerBody {
  private express: Express;

  constructor(options: ServerOptions) {
    this.express = options.express;
  }

  public initialize() {
    const PORT = process.env.PORT || 5000;

    this.express.listen(PORT, () => {
      console.log(`🚀 Server Started on: ${PORT}`);
    });
  }

  public getExpress() {
    return this.express;
  }
}
