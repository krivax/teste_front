import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import React, { useState, useEffect } from 'react'
import manager from '../services/manager';

const PlanoContas = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    manager.getAllList().then((data) => {
      setValues(data.data);
    })
  }, []);


  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.identificacao} label={[nodes.id, ' - ', nodes.identificacao]}>
      {Array.isArray(nodes.parentPlanoConta)
        ? nodes.parentPlanoConta.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['[0]']}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 'auto', flexGrow: 1, maxWidth: '400' }}
    >
      {values.map((value) => renderTree(value))}
    </TreeView>
  );
}

export default PlanoContas;
