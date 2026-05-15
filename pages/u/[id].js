import Head from 'next/head';

export async function getServerSideProps(context) {

  const { id } = context.params;

  try {

    const response = await fetch(
      `https://jobin.app/api/share_profile.php?id=${id}`
    );

    const data = await response.json();

    return {
      props: {
        id,
        profile: data
      }
    };

  } catch (error) {

    return {
      props: {
        id,
        profile: null
      }
    };
  }
}

export default function UserShare({ id, profile }) {

  const title = profile
    ? `${profile.name} - Jobin`
    : 'Perfil profesional en Jobin';

  const description = profile
    ? `${profile.profession} · ${profile.city}, ${profile.country}`
    : 'Conoce este perfil profesional en Jobin.';

  const image = profile
    ? profile.image
    : 'https://share.jobin.app/logo-banner-800x800.jpg';

  return (
    <>
      <Head>

        <title>{title}</title>

        <meta property="og:title" content={title} />

        <meta
          property="og:description"
          content={description}
        />

        <meta property="og:image" content={image} />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content={`https://share.jobin.app/u/${id}`}
        />

      </Head>

      <div style={{ padding: '40px', fontFamily: 'Arial' }}>
           <script
  dangerouslySetInnerHTML={{
    __html: `
      setTimeout(() => {
        window.location.href = "${targetUrl}";
      }, 1500);
    `
  }}
/> 
        <h1>{title}</h1>

        <p>{description}</p>

        <img
          src={image}
          width="300"
          alt={title}
        />

      </div>
          
    </>
  );
}
