import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OutText() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/chat');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* 여기서 데이터를 표시하거나 처리하세요 */}
          <p>{data}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default OutText;