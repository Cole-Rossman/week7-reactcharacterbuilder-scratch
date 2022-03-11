import React, { useState } from 'react';
import './Main.css';

import Character from '../Character/Character';
import Builder from '../Builder/Builder';

export default function Main() {
  const [head, setHead] = useState('Bird');
  const [middle, setMiddle] = useState('Blue');
  const [bottom, setBottom] = useState('Single Leg');
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseArray, setCatchphraseArray] = useState([]);
  return (
    <main>
      <Character head={head} middle={middle} bottom={bottom} />
      <Builder setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} setCatchphrase={setCatchphrase} setCatchphraseArray={setCatchphraseArray} head={head} middle={middle} bottom={bottom} catchphrase={catchphrase} catchphraseArray={catchphraseArray} />
    </main>
  );
}
