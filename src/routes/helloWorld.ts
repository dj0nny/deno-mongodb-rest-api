const helloWorld = ({ response }: { response: any }) => {
  response.body = {
    message: 'Hello World 🍕',
  }
}

export default helloWorld;