export default function({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500 || error.response.status === 404) {
      redirect("/sorry");
    }
  });
}
