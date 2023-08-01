export { Page };
export { documentProps };

import { Component, createEffect, createSignal, onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import styles from './Form.module.css';

const documentProps = {
  // This title and description will override the defaults
  title: 'Signup',
  description: 'Signup',
};

const Page: Component = (props) => {
  const [form, setForm] = createStore({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleInputChange(event: Event) {
    console.log('change');
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    console.log(name + ' ' + value);
    setForm({
      [name]: value,
    });

    console.log(form);
  }

  function handleSubmit(event: Event): void {
    event.preventDefault();
  }

  return (
    <div class="flex h-screen bg-blue-400">
      <div class="m-auto bg-slate-50 rouded-md  w-4/5 h-3/4 grid lg:grid-cols-2">
        <div>Image</div>
        <div class="flex flex-col">
          <section class="text-center py-2 w-11/12 mx-auto flex flex-col gap-5 ">
            {/* Title */}
            <div class=" w-full">
              <h1 class="text-gray-800 text-4xl font-bold py-4">Sign-in</h1>
              <p class="w-3/4 mx-auto text-gray-400">
                Únete a la comunidad deportiva más revolucionaria de nuestra era
              </p>
            </div>

            {/* Form */}
            <form class="flex flex-col gap-5 items-center">
              {/*Inputs */}
              <div class="w-full flex flex-col gap-2">
                <div class="w-full flex border rounded-xl relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class=" w-full py-2 px-6 border rounded-xl bg-slate-50
                   focus:outline-none border-none"
                  />
                </div>
                <div class="w-full flex border rounded-xl relative">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    class=" w-full py-2 px-6 border rounded-xl bg-slate-50
                  focus:outline-none border-none"
                  />
                </div>
              </div>

              {/* Login buttons*/}
              <div class="flex flex-col gap-1 w-3/4">
                <button type="submit" class={styles.button}>
                  Login
                </button>
                <button type="button" class={styles.button_custom}>
                  Sign In with Google
                </button>
                <button type="button" class={styles.button_custom}>
                  Sign In with Facebook
                </button>
                <button type="button" class={styles.button_custom}>
                  Sign In with Twitter
                </button>
              </div>
            </form>

            {/* Register */}
            <p class="text-center text-gray-400 ">
              don't have an account yet?{' '}
              <a href={'/authentication/'}>
                <span class="text-blue-700">Sign Up</span>
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
