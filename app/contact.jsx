import ContactImage from '@/assets/images/contact-background.jpg'; // Replace with your PNG image path
import { Link } from 'expo-router';
import React from 'react';
import { ImageBackground, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Contact() {

    const handleEmailPress = () => {
        Linking.openURL('mailto:info"coffeeshop.com')
    }
    return (
        <ImageBackground source={ContactImage} resizeMode="cover" style={styles.background}>
            <View style={styles.overlay}>
                <Text style={styles.title}>Contact Us</Text>
                <Text style={styles.subtitle}>We'd love to hear from you!</Text>

                {/* Contact Form */}
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        placeholderTextColor="#999"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Your Email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={[styles.input, styles.messageInput]}
                        placeholder="Your Message"
                        placeholderTextColor="#999"
                        multiline
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Send Message</Text>
                    </TouchableOpacity>
                </View>

                {/* Contact Information */}
                <View style={styles.contactInfo}>
                    <Text href="email:info@coffeeshop.com" style={styles.infoText} onPress={handleEmailPress}>📧 Email: info@coffeeshop.com</Text>
                    <Link href="tel:+254700000000" style={styles.infoText}>📞 Phone: +254700000000</Link>
                    <Link href="sms:+254711002200" style={styles.infoText}>📞 SMS: +254711002200</Link>
                    <Text style={styles.infoText}>📍 Address: 123 Coffee St, Nairobi, Kenya</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white overlay
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff', // Dark gray
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white', // Medium gray
        marginBottom: 30,
    },
    form: {
        marginBottom: 30,
    },
    input: {
        backgroundColor: 'transparent',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#fff', // Dark gray
        borderWidth: 1,
        borderColor: '#E2E8F0', // Light gray border
    },
    messageInput: {
        height: 100,
        textAlignVertical: 'top', // Align text to the top for multiline input
    },
    button: {
        backgroundColor: '#FF6B6B', // Vibrant coral color
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactInfo: {
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        color: '#4A5568', // Medium gray
        marginBottom: 10,
        color: 'white'
    },
});