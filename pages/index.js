import Head from 'next/head';

export default function Home() {

  const targetUrl = 'https://jobin.app';

  return (
    <>
      <Head>

        <title>
          Jobin
        </title>

        <meta
          name="description"
          content="Crea tu perfil profesional online gratis."
        />

        <meta
          property="fb:app_id"
          content="960171599975003"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Crea tu perfil laboral online gratis | Jobin"
        />

        <meta
          property="og:description"
          content="Muestra tu experiencia y habilidades en un solo lugar."
        />

        <meta
          property="og:url"
          content="https://share.jobin.app"
        />

        <meta
          property="og:image"
          content="https://share.jobin.app/invite-banner-v3.jpg"
        />

        <meta
          property="og:image:type"
          content="image/jpeg"
        />

      </Head>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              window.location.href = "${targetUrl}";
            }, 1000);
          `
        }}
      />

      <div
        style={{
          fontFamily: 'Arial',
          padding: '40px',
          textAlign: 'center'
        }}
      >

        <h1>Jobin</h1>

        <p>
          Redirecting...
        </p>

      </div>
    </>
  );
}
