import React from "react";

const Nama = (props) => (
	<>
		<h3>nama:{props.namabarang}</h3>
		<h3>harga:{props.hargabarang}</h3>
		<input type="text" onBlur={(event) => props.ubahbarang2(event.target.value)}></input>
		<input type="text" onBlur={(event) => props.ubahbarang3(event.target.value)}></input>
		<input type="button" onClick={props.ubahbarang} value="ubah"></input>
	</>
)

export default Nama;