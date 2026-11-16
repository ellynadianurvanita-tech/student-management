import { useState } from "react";
import Clock from "./Clock.jsx";

// Data awal: array of objects (minimal 5 data)
const dataAwal = [
  {
    nim: "2301001",
    nama: "Andi Saputra",
    noHp: "081234567801",
    email: "andi@mail.com",
    alamat: "Surabaya",
    prodi: "Informatika",
    tahunMasuk: 2023,
  },
  {
    nim: "2301002",
    nama: "Budi Santoso",
    noHp: "081234567802",
    email: "budi@mail.com",
    alamat: "Malang",
    prodi: "Sistem Informasi",
    tahunMasuk: 2023,
  },
  {
    nim: "2301003",
    nama: "Citra Amelia",
    noHp: "081234567803",
    email: "citra@mail.com",
    alamat: "Lumajang",
    prodi: "Informatika",
    tahunMasuk: 2023,
  },
  {
    nim: "2401001",
    nama: "Dinda Putri",
    noHp: "081234567804",
    email: "dinda@mail.com",
    alamat: "Jember",
    prodi: "Manajemen",
    tahunMasuk: 2024,
  },
  {
    nim: "2401002",
    nama: "Eko Pratama",
    noHp: "081234567805",
    email: "eko@mail.com",
    alamat: "Kediri",
    prodi: "Informatika",
    tahunMasuk: 2024,
  },
];

function App() {
  // useState: menyimpan data mahasiswa
  const [mahasiswa] = useState(dataAwal);

  return (
    <>
      <header className="topbar">
        <div className="topbar-inner">
          <h1>Student Management</h1>
          <Clock />
        </div>
      </header>

      <main>
        <section className="panel">
          <h2>Daftar Data Mahasiswa</h2>

          <p className="info">
            Jumlah mahasiswa: <strong>{mahasiswa.length}</strong>
          </p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. Hp</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>
              <tbody>
                {/* .map(): satu objek mahasiswa = satu baris tabel */}
                {mahasiswa.map((mhs) => (
                  <tr key={mhs.nim}>
                    <td>{mhs.nim}</td>
                    <td>{mhs.nama}</td>
                    <td>{mhs.noHp}</td>
                    <td>{mhs.email}</td>
                    <td className="alamat">{mhs.alamat}</td>
                    <td>{mhs.prodi}</td>
                    <td className="tengah">{mhs.tahunMasuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
