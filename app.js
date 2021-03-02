const app = Vue.createApp({
  //template: "<h1>Hello {{firstName}}</h1>",
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    }
  },
  methods: {
    getUser: async function() {
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json(); // Could also be destructured as object: const { results } = await res.json();

      this.firstName = data.results[0].name.first;
      this.lastName = data.results[0].name.last;
      this.email = data.results[0].email;
      this.gender = data.results[0].gender;
      this.picture = data.results[0].picture.large;
    }
  }

  // methods: {
  //   getUser: function() {
  //     this.firstName = "Lucy";
  //     this.lastName = "Larason";
  //     this.email = "lucy@gmail.com";
  //     this.gender = "female";
  //     this.picture = "https://randomuser.me/api/portraits/women/10.jpg";
  //   }
  // }

})

app.mount("#app");