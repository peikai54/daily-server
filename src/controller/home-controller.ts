import HomeService from "../service/home-service";

class HomeController {
  private service: HomeService = new HomeService();

  hello = async (ctx) => {
    try {
      ctx.body = await this.service.hello();
    } catch (error) {}
  };
}

export default new HomeController();
