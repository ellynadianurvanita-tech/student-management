import { useState } from "react";
import Clock from "./Clock.jsx";

// Data awal: array of objects (minimal 5 data)
const dataAwal = [
  { nim: "2301001", nama: "Ayu Lestari", noHp: "081234567801", email: "ayu.lestari@mail.com", alamat: "Jl. Mawar No. 12, Surabaya", prodi: "Teknik Informatika", tahunMasuk: 2023 },
  { nim: "2301002", nama: "Budi Santoso", noHp: "081234567802", email: "budi.santoso@mail.com", alamat: "Jl. Melati No. 5, Sidoarjo", prodi: "Sistem Informasi", tahunMasuk: 2023 },
  { nim: "2201015", nama: "Citra Wulandari", noHp: "081234567803", email: "citra.w@mail.com", alamat: "Jl. Kenanga No. 8, Gresik", prodi: "Teknik Informatika", tahunMasuk: 2022 },
  { nim: "2201023", nama: "Dimas Prakoso", noHp: "081234567804", email: "dimas.p@mail.com", alamat: "Jl. Anggrek No. 21, Surabaya", prodi: "Teknik Elektro", tahunMasuk: 2022 },
  { nim: "2101008", nama: "Eka Putri", noHp: "081234567805", email: "eka.putri@mail.com", alamat: "Jl. Dahlia No. 3, Malang", prodi: "Manajemen", tahunMasuk: 2021 },
  { nim: "2401004", nama: "Fajar Ramadhan", noHp: "081234567806", email: "fajar.r@mail.com", alamat: "Jl. Cempaka No. 17, Mojokerto", prodi: "Akuntansi", tahunMasuk: 2024 },
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
