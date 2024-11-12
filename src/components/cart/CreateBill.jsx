import { Button, Card, Form, Input, Modal, Select } from 'antd'
import React from 'react'

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

    const onFinish = (values) => {
        console.log(values)
    }


    return (
        <div>
            <Modal title="Fatura Oluştur"
                open={isModalOpen}
                footer={false}
                onCancel={() => setIsModalOpen(false)}
            >
                <Form layout={'vertical'} onFinish={onFinish}>
                    <Form.Item label="Müşteri Adı" name={"customerName"} rules={[{ required: true, message: "Müşteri Adı Alanı Boş Geçilemez" }]}>
                        <Input placeholder='Bir Müşteri Adı Yazınız' />
                    </Form.Item>
                    <Form.Item label="Tel No" name={"phoneNumber"} rules={[{ required: true, message: "Telefon No Alanı Boş Geçilemez" }]}>
                        <Input placeholder='Bir Telefon Numarası Yazınız' maxLength={11} />
                    </Form.Item>
                    <Form.Item label="Ödeme Yöntemi Seçiniz" name={"paymentMode"} rules={[{ required: true, message: "Ödeme Alanı Alanı Boş Geçilemez" }]}>
                        <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
                            <Select.Option value="Nakit">Nakit</Select.Option>
                            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                        </Select>
                    </Form.Item>
                    <Card>
                        <div className='flex justify-between'>
                            <span>Ara Toplam</span>
                            <span>549.00₺</span>
                        </div>
                        <div className='flex justify-between my-2'>
                            <span>KDV Toplam %8</span>
                            <span className='text-red-600'>549.00₺</span>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <b>Toplam</b>
                            <b>549.00₺</b>
                        </div>
                        <div className='flex justify-end'>
                            <Button className='mt-2' type='primary' htmlType='submit' onClick={() => { setIsModalOpen(true) }}>Sipariş Oluştur</Button>
                        </div>
                    </Card>
                </Form>
            </Modal>
        </div>
    )
}

export default CreateBill