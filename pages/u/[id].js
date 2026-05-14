export async function getServerSideProps(context) {

  const { id } = context.params;

  return {
    props: {
      id
    }
  };
}

export default function UserShare({ id }) {

  const targetUrl = `https://jobin.app/user/${id}`;

  return (
    <>
      <head>
        <title>Perfil profesional en Jobin</title>

        <meta property="og:title" content="Perfil profesional en Jobin" />

        <meta
          property="og:description"
          content="Conoce este perfil profesional en Jobin."
        />

        <meta
          property="og:image"
          content="https://share.jobin.app/invite-banner-v3.jpg"
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={targetUrl} />

        <meta
          httpEquiv="refresh"
          content={`0;url=${targetUrl}`}
        />
      </head>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.location.href = "${targetUrl}";
          `
        }}
      />

      <div
        style={{
          fontFamily: 'Arial',
          padding: '40px'
        }}
      >
        Redirecting...
      </div>
    </>
  );
}
