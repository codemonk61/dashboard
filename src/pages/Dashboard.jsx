import React from 'react'
import Text from '../components/Text'
import FileUploader from '../components/FileUploader'
import Tab from '../components/Tab'
import Heading from '../components/Heading'
import SelectPicker from '../components/SelectPicker'
import Input from '../components/Input'
import DatePicker from '../components/DatePicker'
import ToggleButton from '../components/ToggleButton'
import Button from '../components/Button'
import CommentInput from '../components/CommentInput'

const imageUrl = `https://s3-alpha-sig.figma.com/img/16b9/71b5/374d35591cf107df0cbf15334675279b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOm0N8kwEjYLyLRnohYhRbb0qDMDTqQcnmu~ixW~D-jucpU1XcGE80kbQhMEY~yW19mWjo7M3BVMa5qp3d67egt~2pl69GMy8tw3bWdM93GlLhPrN16sXCnmhiX5ixM0mq1Sm4yUhQly~8Q1Lyhrb8fq~7nSHyS1BtvXzCEMVtNjr4yocSfZe8IYxFbWLQOdwgTFp2Pwiwx-3PnuFb08ogmlz8P0RaYGsmnYLJwM9bRhd4roXMKMH9VTM6abI7DxqLML21I8Yz~wS~XejsRKjnYMUrfZzYmn~ZMfXihVc5GWuc2BaGhmj-52F6iHdL6HC-8tqW7HyQ146hLhL62Gbw__`
const styles = `
.header{
 display: flex;
 align-items: center;
 gap: 8px;
}
.invoice__wrapper{
 display: flex;
 flex: 1;
}
 .left__section{
  height: 100vh;
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed gray;
  border-radius: 8px;
 }
  .right__section{
   flex: 1
  }
.input__wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between
}
  .togglebtn__wrapper{
    display: flex;
  align-items: center;
  gap: 12px;
  }
.btn__wrapper{
 border: 1px solid lightgrey;
 border-radius: 8px 8px 0px 0px;
 padding: 12px;
 display: flex;
 align-items: center;
 justify-content: space-between
}
`

const Dashboard = () => {

    const handleTabChange = (activeIndex) => {
        console.log("Active Tab Index:", activeIndex);
    };

    return (
        <>
            <style>
                {styles}
            </style>
          
            <div className='invoice__wrapper'>
                <div className='left__section'>
                    
                    <Text>
                        Upload Your Invoice
                    </Text>
                    <Text>
                        To auto-populate field and save time
                    </Text>
                    <img src={imageUrl} height="100px" width="100px" />
                    <FileUploader label="Upload File" onFileChange={() => { }} />
                    <div>
                        <Text RenderAs="span" color={'blue'} body="10px">Click To Upload{" "}</Text><Text RenderAs="span" color={'gray'} body="10px">or Drag and drop</Text>
                    </div>
                </div>
                <div className='right__section'>
                    <div>
                        <Heading
                            icon={<span style={{ color: "#007BFF", fontSize: "20px" }} >@</span>}
                            text="Vandor Details"
                            iconBackground="#EAF4FF"
                            textColor="#000"
                        />
                        <Text body="20px" fontWeight="600" mt="16px" mb="16px">
                            Vendor Information
                        </Text>

                        <SelectPicker
                            label="Vendor"
                            options={[]}
                            value={''}
                            onChange={() => { }}
                            placeholder="Select PO Number"
                        />
                        <Text color="gray" body="10px">550 main st., lynn</Text>
                        <Text color="blue" body="10px" align="center" mb="35px">View Vendor Details</Text>
                        <Heading
                            icon={<span style={{ color: "#007BFF", fontSize: "20px" }} >@</span>}
                            text="Invoice Details"
                            iconBackground="#EAF4FF"
                            textColor="#000"
                        />
                        <Text body="20px" fontWeight="600" mt="16px" mb="16px">
                            General Information
                        </Text>

                        <SelectPicker
                            label="Purchase Order Number"
                            options={[]}
                            value={''}
                            onChange={() => { }}
                            placeholder="Select PO Number"
                        />
                        <Text body="20px" fontWeight="600" mt="16px" mb="16px">
                            Invoice Details
                        </Text>
                        <div className='input__wrapper'>
                            <Input
                                name="Invoice Number"
                                value={""}
                                onChange={() => { }}
                                placeholder="Enter Invoice Number"
                                required
                            />
                            <DatePicker
                                label="Invoice Date"
                                value={""}
                                onChange={() => { }}
                                placeholder="MM/DD/YYYY"
                                required
                            />
                        </div>
                        <div className='input__wrapper'>
                            <Input
                                name="Total Amount"
                                value={""}
                                prefix="$"
                                onChange={() => { }}
                                placeholder="Enter Invoice Number"
                                required
                            />
                            <SelectPicker
                                label="PaymentTerms"
                                options={[]}
                                value={''}
                                onChange={() => { }}
                                placeholder="Select PO Number"
                            />
                        </div>
                        <div className='input__wrapper'>
                            <DatePicker
                                label="Invoice Due Date"
                                value={""}
                                onChange={() => { }}
                                placeholder="MM/DD/YYYY"
                                required
                            />
                            <DatePicker
                                label="Gl Post Date"
                                value={""}
                                onChange={() => { }}
                                placeholder="MM/DD/YYYY"
                                required
                            />
                        </div>
                    </div>
                    <Input
                        name="Invoice Description"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter Invoice Number"
                        required
                    />
                    <div className='input__wrapper'>
                        <Text body="20px" fontWeight="600" mt="16px" mb="16px">
                            Expense Details
                        </Text>
                        <div className='togglebtn__wrapper'>
                            <Text RenderAs="span" body="14px" fontWeight="200" mt="16px" mb="16px">$ 0.00{" "}</Text>/
                            <Text color="blue" RenderAs="span" body="14px" fontWeight="200" mt="16px" mb="16px">{" "}$ 0.00</Text>
                            <ToggleButton
                                options={["$", "%"]}
                                defaultSelected={0}
                                onToggle={() => { }}
                            />
                        </div>
                    </div>
                    <div className='input__wrapper'>
                        <Input
                            name="Line Amount"
                            value={""}
                            prefix="$"
                            onChange={() => { }}
                            placeholder="Enter Invoice Number"
                            required
                        />
                        <SelectPicker
                            label="Department"
                            options={[]}
                            value={''}
                            onChange={() => { }}
                            placeholder="Select PO Number"
                        />
                    </div>
                    <div className='input__wrapper'>
                        <SelectPicker
                            label="Account"
                            options={[]}
                            value={''}
                            onChange={() => { }}
                            placeholder="Select PO Number"
                        />
                        <SelectPicker
                            label="Location"
                            options={[]}
                            value={''}
                            onChange={() => { }}
                            placeholder="Select PO Number"
                        />
                    </div>
                    <Input
                        name="Invoice Description"
                        value={""}
                        onChange={() => { }}
                        placeholder="Enter Invoice Number"
                        required
                    />
                    <Button appearance="default" label="Add Expense coding" onClick={() => { }} icon={<>+</>} />
                    <Heading
                        icon={<span style={{ color: "#007BFF", fontSize: "20px" }} >@</span>}
                        text="Comments"
                        iconBackground="#EAF4FF"
                        textColor="#000"
                    />
                    <CommentInput
                        placeholder="Add a comment and use @Name to tag someone"
                        onSend={() => { }}
                    />
                    <div className='btn__wrapper'>
                        <div>|</div>
                        <div>
                            <Button appearance="default" label="Save as Draft" onClick={() => { }} />
                        </div>
                        <div>
                            <Button appearance="primary" label="Submit and New" onClick={() => { }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard