export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "notes-app-uploads"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://r1mzl30w6b.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_7QsGLyB2I",
      APP_CLIENT_ID: "4gom5bhf6k0kl08llggtqj6io2",
      IDENTITY_POOL_ID: "eu-central-1:15f98058-237f-44a9-8193-8fb98b57f1ea"
    },
    STRIPE_KEY: "pk_test_4mZ5TdD4LI5c2p807yEKGIKf007sViDkSf",
  };