
import { useState } from "react";
import SelectPicker from "../components/SelectPicker";
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import FileUploader from "../components/FileUploader";
import Tab from "../components/Tab";
import Button from "../components/Button";
import Heading from "../components/Heading";
import ToggleButton from "../components/ToggleButton";
import CommentInput from "../components/CommentInput";

function Styleguide() {
  const [poNumber, setPoNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [invoiceDueDate, setInvoiceDueDate] = useState('');

  const handleFileChange = (file) => {
    console.log("Selected File:", file);
  };

  const handleTabChange = (activeIndex) => {
    console.log("Active Tab Index:", activeIndex);
  };

  const handlePoNumberChange = (event) => {
    setPoNumber(event.target.value);
  };

  const handleSend = (comment) => {
    console.log("Comment sent:", comment);
  };

  const handleToggle = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };


  const poOptions = [
    { value: 'PO123', label: 'PO123' },
    { value: 'PO456', label: 'PO456' },
    { value: 'PO789', label: 'PO789' },
  ];

  return (
    <>
      <SelectPicker
        label="Purchase Order Number"
        options={poOptions}
        value={poNumber}
        onChange={handlePoNumberChange}
        placeholder="Select PO Number"
      />
      <SelectPicker
        label="Purchase Order Number"
        options={poOptions}
        value={poNumber}
        onChange={handlePoNumberChange}
        placeholder="Select PO Number"
      />
      <Input
        label="Total Amount"
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
        placeholder="0.00"
        prefix="$"
        suffix="USD"
        required
      />
      <DatePicker
        label="Invoice Due Date"
        value={invoiceDueDate}
        onChange={(e) => setInvoiceDueDate(e.target.value)}
        placeholder="MM/DD/YYYY"
        required
      />
      <Button appearance="default" label="Save as Draft" onClick={() => { }} />
      <Button appearance="primary" label="Submit" onClick={() => { }} icon={<>+</>} />
      <Tab
        tabs={["Vendor Details", "Invoice Details", "Comments"]}
        onTabChange={handleTabChange}
      />
      <FileUploader label="Upload File" onFileChange={handleFileChange} />

      <CommentInput
        placeholder="Add a comment and use @Name to tag someone"
        onSend={handleSend}
      />
      <Heading
        icon={<span style={{ color: "#007BFF", fontSize: "20px" }} >@</span>}
        text="Comments"
        iconBackground="#EAF4FF"
        textColor="#000"
      />
        <ToggleButton
        options={["$", "%"]}
        defaultSelected={0}
        onToggle={handleToggle}
      />
    </>
  );
}

export default Styleguide;
