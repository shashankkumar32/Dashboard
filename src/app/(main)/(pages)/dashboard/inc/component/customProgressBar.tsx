import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
interface Props {
    sx?: React.CSSProperties; 
    color1: string; 
    color2: string;
    /* eslint-disable */
    value:any;
  }
  
  const CustomProgressBar: React.FC<Props> = ({
    color1,
    color2,
    value
  }) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          background: `${color1}`,
          ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
          }),
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          background: `${color2}`,
          ...theme.applyStyles('dark', {
            backgroundColor: '#308fe8',
          }),
        },
      }));
    return (
        <BorderLinearProgress variant="determinate" value={value} />
    );
  };
  
  export default CustomProgressBar;
  