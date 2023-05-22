import * as React from "react"
import {styled} from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, {AccordionProps} from "@mui/material/Accordion"
import MuiAccordionSummary, {AccordionSummaryProps} from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import useSWR from "swr"
import {fetcherGet, fetcherPost} from "../hooks/urls"
import LinkN from "next/link"

import {Grid, Link, List, ListItem, Paper} from "@mui/material"
import {useStore} from "../hooks/store"
import ROUTES from "../constants/routes"

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    }
  })
)

const AccordionSummary = styled((props: AccordionSummaryProps) => {
  return <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: "0.9rem"}} />} {...props} />
})(({theme}) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
}))

export default function AdminMenu() {
  const session = { accessToken: "test"}
  const openMenu = useStore(state => state.openMenu)
  const openSubMenu = useStore(state => state.openSubMenu)
  const openSubSubMenu = useStore(state => state.openSubSubMenu)

  const [menuLevelTwo, setMenuLevelTwo] = React.useState([])
  const [menuLevelThree, setMenuLevelThree] = React.useState([])

  const setOpenMenu = useStore(state => state.setOpenMenu)
  const setOpenSubMenu = useStore(state => state.setOpenSubMenu)

  const setOpenSubSubMenu = useStore(state => state.setOpenSubSubMenu)
  const setAppConfig = useStore(state => state.setAppConfig)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setOpenMenu(newExpanded ? panel : "")
  }
  const handleChangeSubMenu = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setOpenSubMenu(newExpanded ? panel : "")
  }

  const handleChangeSubSubMenu = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setOpenSubSubMenu(newExpanded ? panel : "")
  }

  const handlePurChangeSubMenu =
    (panel: string, menukey: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setOpenSubMenu(newExpanded ? panel : "")
      // getMenuLocation(menukey)
    }

  const handlePurChangeSubSubMenu =
    (panel: string, menukey: string, menulocationkey: string) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setOpenSubSubMenu(newExpanded ? panel : "")
      // getMenuPurchaseOrder(menukey, menulocationkey)
    }

  return (
    <Grid item>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column"
        }}>

        <Accordion expanded={openMenu === "aereonave"} onChange={handleChange("aereonave")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Mapa</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem disablePadding key="others">
                <LinkN href={"/admin/map/map"}>
                  <Link>Ver</Link>
                </LinkN>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Grid>
    // </DashboardComponent>
  )
}

// AdminMenu.auth = true
