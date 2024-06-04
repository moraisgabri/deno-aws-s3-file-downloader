# Deno AWS S3 File Downloader

<p align="center">
I needed to do a mass download of files from an s3 bucket, I took the opportunity to test Deno
</p>

## Dependencies

First, you need to have [Deno](https://docs.deno.com/runtime/manual/getting_started/installation) installed in your machine.

Create a file inside `inputs/` directory, please use **exactly** a `main.tsv` file. You can follow the example `inputs/main.example.tsv`.

Now last and not least, please fill your environment variables. Follow the `.env.example` pattern

## Running

Simply execute: `deno download.ts`
your files will be availeble in the folder `outputs.ts`

#### made with ❤️ by zega