import Request from '../models/Request';

class RequestController {
  async index(req, res) {
    const orders = await Request.findAll({ where: { answered: false } });

    return res.json(orders);
  }

  async store(req, res) {
    const { name, email, phone } = req.body;

    const order = await Request.create({
      name,
      email,
      phone,
    });

    return res.json(order);
  }

  async show(req, res) {
    const { id } = req.params;

    const interviewRequest = await Request.findByPk(id);

    return res.json(interviewRequest);
  }

  async update(req, res) {
    const { id } = req.params;
    const interviewRequest = await Request.findByPk(id);

    await interviewRequest.update({
      ...interviewRequest,
      answered: true,
    });

    return res.json(interviewRequest);
  }

  async delete(req, res) {
    const { id } = req.params;

    const interviewRequest = await Request.findByPk(id);

    await interviewRequest.destroy();

    return res.send({ message: 'Request succesfully deleted' });
  }
}

export default new RequestController();
