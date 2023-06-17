const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
      marginBottom: '15px',
    },
  };
  
  const Home = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to PHONE book!
        </h1>
        <img src="https://cdn3.iconfinder.com/data/icons/mobile-apps-24/105/23-512.png" alt="contacts app" />
      </div>
    );
}
  
export default Home;