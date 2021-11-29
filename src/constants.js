const BASE_URL = "../static/tech-icons/";

const techStack = {
  DJANGO: {
    title: Symbol("Django"),
    iconUrl: BASE_URL + "django.svg",
  },
  DRF: {
    title: Symbol("Django Rest Framework"),
    iconUrl: BASE_URL + "drf.svg",
  },
  PYTHON: {
    title: Symbol("Python"),
    iconUrl: BASE_URL + "python.svg",
  },
  CELERY: {
    title: Symbol("Celery"),
    iconUrl: BASE_URL + "celery.svg",
  },
  TWISTED: {
    title: Symbol("Twisted"),
    iconUrl: BASE_URL + "twisted.svg",
  },
  STRIPE: {
    title: Symbol("Stripe"),
    iconUrl: BASE_URL + "stripe.svg",
  },
  RABBITMQ: {
    title: Symbol("RabbitMQ"),
    iconUrl: BASE_URL + "rabbitmq.svg",
  },
};

export default techStack;
