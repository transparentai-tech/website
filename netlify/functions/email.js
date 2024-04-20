const { SENDER_API_KEY: apiKey, SENDER_API_BASE_URL: domain } = process.env;
const headers = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
};

const sendThankYouEmail = async ({ email }) => {
  console.log('Sending the email');
};

const addSubscriber = async (data) => {
  const url = new URL("subscribers", domain);
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  });

  return response.json()
};

export default async (request) => {
  try {
    const data = await request.json();

    await addSubscriber(data);

    return Response.json("success");
  } catch (error) {
    return Response.json({ error: 'Failed sending email' }, { status: 500 });
  }
};
