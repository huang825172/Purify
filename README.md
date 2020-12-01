# Purify

A web application example with minimal dependence on **Node.js ecosystem**.

**NOT YET FINISHED**

## Tech Stack

+ **Bootstrap** by CDN
+ **Vue.js** by CDN
+ **Vue router** and **axios** by CDN
+ **oak** and **MySQL connector** on **Deno**
+ *(optional)* **Parcel** depending on npm

## Run

To run this example, **Deno** runtime is required, and **SQLite** is the default database provider, or you can manual configure it to **MySQL** .

Follow the instruction [here](https://deno.land/#installation) to install Deno.

With Deno installed (in some district `HTTP_PTOXY` and `HTTPS_PROXY` should be set to have full network access), walk into the project directory and run **app.ts** with `--allow-net` option.

```bash
cd Purify
deno run --allow-net src/app.ts
```
