import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'purple', 'tan'];



const Recharts = () => {
    const rechartsData = useLoaderData();
    // const {totalPages,bookName} = rechartsData[0];
    // console.log(totalPages,bookName);

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
      
  
    return (
        <div className="mt-8 mb-8">
            <h2 className="text-xl font-bold text-center">Recharts</h2>
            
                <ResponsiveContainer width="100%" height={500}>
                <BarChart  data={rechartsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey={"totalPages"} fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>

                {rechartsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}

                </Bar>

                </BarChart>
                </ResponsiveContainer>
            
             
        </div>
    );
};

export default Recharts;