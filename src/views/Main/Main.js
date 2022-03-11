import React, { useState } from 'react';

import Builder from '../../components/Builder/Builder';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseArray, setCatchphraseArray] = useState([]);
  return (
    <main>
      <Builder setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} setCatchphrase={setCatchphrase} setCatchphraseArray={setCatchphraseArray} head={head} middle={middle} bottom={bottom} catchphrase={catchphrase} catchphraseArray={catchphraseArray} />
    </main>
  );
}
