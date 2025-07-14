export default function Footer() {
  return (
    <footer style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      © {new Date().getFullYear()} Coffee Shop. All rights reserved.
    </footer>
  );
}
