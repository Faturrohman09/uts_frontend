/* eslint-disable no-dupe-class-members */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nama from './Nama';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { namabarang: "monitor", hargabarang: 1500000 };
  }
  ubahbarang = () => this.setState({ namabarang: "keyboard", hargabarang: 500000 });
  ubahbarang2 = (barang) => this.setState({ namabarang: barang });
  ubahbarang3 = (harga) => this.setState({ hargabarang: harga });
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>UTS FRONTEND</p>
          <Nama nama={this.state.namabarang} harga={this.state.hargabarang}></Nama>
        </div>
      </div>
    );
  }
}

export default App;