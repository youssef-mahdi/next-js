import Link from 'next/link'
import React from "react";
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setdata] = useState('')
  const [newId, setNewId] = useState('')
  async function ab(site) {
    const lastsearch = window.localStorage.getItem('Search');
    window.localStorage.setItem('Search', lastsearch + ',' + site)

    const res = await fetch('/api/domains?site=' + site).then(response => response.json())
      .then(data => {
        if (data.error == 'no')
          setdata(data.domain)
        console.log(data.domain)
        if (data.error == 'yes')
          setdata('')
      });
  }

  return (
    < div className={styles.container} >
      <div className={styles.form}> <p>Enter the domain</p> <input type="text" onChange={(e) => { setNewId(e.target.value) }} ></input>        </div>
      <button onClick={() => ab(newId)}> find </button>
      { data == '' ? <p></p> : <p><Data data={data}></Data> </p>}
    </div >
  )
}

const Data = props => {
  if (props.data.available == false)
    return (
      <div>
        <p> Domain Name:{props.data.domain}</p>
        <p> Domain Available: 'False'  </p>
        <p> Domain Difinitive: 'Yes'  </p>
      </div>
    )
  if (props.data.available == true)
    return (
      <div>
        <p> Domain Name:{props.data.domain}</p>
        <p> Domain Available: 'True'  </p>
        <p> Domain Currency: {props.data.currency}  </p>
        <p> Domain Price: {props.data.price}  </p>
        <p> Domain Difinitive: 'Yes' </p>
        <Link
          href={{
            pathname: '/buydomain',
            query: { domain: props.data.domain },
          }}
        >
          <button>Buy</button>
        </Link>
      </div>
    )

}