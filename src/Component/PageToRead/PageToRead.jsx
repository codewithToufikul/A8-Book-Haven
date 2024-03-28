import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStorageBooks } from '../../Utility/LocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageToRead() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const localBooks = getStorageBooks();
        setBooks(localBooks);
    }, [])

  return (
    <div className='bg-gray-50 md:p-10 flex justify-center rounded-3xl'>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={books}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className='text-xs' dataKey="book_name" />
          <YAxis />
          <Bar dataKey="number_of_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {books.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
