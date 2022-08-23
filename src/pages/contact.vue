<template>
  <div>
    <div class="relative mx-auto max-w-xl">
      <div class="text-center">
        <h1>Contact Me</h1>

        <p>
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
          massa dictumst amet. Sapien tortor lacus arcu.
        </p>
      </div>

      <div>
        <form
          method="POST"
          name="contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="onSubmit"
        >
          <div>
            <label for="name"> Name</label>
            <div>
              <input
                required
                novalidate
                type="text"
                name="name"
                label="Name *"
                placeholder="Your Name"
                :stacked="true"
                :disabled="loading"
                v-model="form.name"
              />
            </div>
          </div>

          <div>
            <label for="email">Email</label>
            <div class="mt-1">
              <input
                required
                novalidate
                type="email"
                name="email"
                label="E-Mail *"
                placeholder="Your Email"
                :stacked="true"
                :disabled="loading"
                v-model="form.email"
              />
            </div>
          </div>

          <div>
            <label for="message">Message</label>
            <div class="mt-1">
              <textarea
                rows="4"
                required
                novalidate
                type="text"
                name="message"
                label="Message *"
                placeholder="Your Message"
                :stacked="true"
                :disabled="loading"
                v-model="form.message"
              />
            </div>
          </div>

          <input type="hidden" name="form-name" value="contact-form" />

          <div>
            <button type="submit" :disabled="loading">
              {{ loading ? "Submitting..." : "Submit" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        message: null,
        email: null,
        name: null,
      },
      loading: false,
    };
  },
  methods: {
    async onSubmit() {
      const data = { "form-name": "contact-form", ...this.form };
      try {
        this.loading = true;
        let response = await fetch("/", {
          method: "POST",
          body: Object.keys(data)
            .map(
              (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&"),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        if (response.status === 200) {
          swal("Thank you!", "Your form has been submitted", "success");
          this.form.message = null;
          this.form.email = null;
          this.form.name = null;
        } else {
          throw new Error();
        }
      } catch (error) {
        swal("Sorry!", "Your form could not be submitted", "error");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
