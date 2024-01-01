import { Box, useTheme } from '@mui/material';
import Header from '../../components/header/header.components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../../theme';

interface AccordionProps {
  header: string;
  subheader: string;
  color: string;
}

const AccordionQuestion: React.FC<AccordionProps> = (
  props
): React.ReactElement => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={props.color} variant="h5">
          {props.header}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.subheader}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const Faq: React.FC = (): React.ReactElement => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <AccordionQuestion
        color={colors.greenAccent[500]}
        header="An Important Question"
        subheader="An important answer."
      />
      <AccordionQuestion
        color={colors.greenAccent[500]}
        header="Another Important Question"
        subheader="Another important answer."
      />
      <AccordionQuestion
        color={colors.greenAccent[500]}
        header="Your Favorite Question"
        subheader="Your favorite answer."
      />
      <AccordionQuestion
        color={colors.greenAccent[500]}
        header="Some Random Question"
        subheader="Answer to random question."
      />
      <AccordionQuestion
        color={colors.greenAccent[500]}
        header="The Final Question"
        subheader="And the final answer."
      />
    </Box>
  );
};

export default Faq;
