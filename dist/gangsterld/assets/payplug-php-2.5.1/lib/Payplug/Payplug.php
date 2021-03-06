<?php
namespace Payplug;

/**
 * The client Payplug
 */
class Payplug
{
    /**
     * @var Payplug|null The default authentication that should be used when no authentication is
     * provided.
     */
    private static $_defaultConfiguration = null;

    /**
     * @var string The token.
     */
    private $_token;

    /**
     * Constructor for a authentication.
     *
     * @param   string  $token  The token
     *
     * @throws Exception\ConfigurationException when token is not set
     */
    public function __construct($token)
    {
        if (!is_string($token)) {
            throw new Exception\ConfigurationException('Expected string values for token.');
        }
        $this->_token = $token;
    }

    /**
     * Initializes a Authentication and sets it as the new default global authentication.
     * It also performs some checks before saving the authentication.
     *
     * <pre>
     * Expected array format for argument $authentication :
     * $authentication['TOKEN'] = 'YOUR TOKEN'
     * </pre>
     *
     * @param  string   $token  the authentication token
     *
     * @return Payplug  the new client authentication
     *
     * @throws Exception\ConfigurationException
     */
    public static function setSecretKey($token)
    {
        if (!is_string($token)) {
            throw new Exception\ConfigurationException('Expected string values for the token.');
        }

        $clientConfiguration = new Payplug($token);

        self::setDefaultConfiguration($clientConfiguration);

        return $clientConfiguration;
    }

    /**
     * Gets the token corresponding to the mode currently in use (Live token or Test token).
     *
     * @return  string  The current token
     */
    public function getToken()
    {
        return $this->_token;
    }

    /**
     * Gets the default global authentication.
     *
     * @return  Payplug The last client authentication
     *
     * @throws  Exception\ConfigurationNotSetException    when the global authentication was not set.
     */
    public static function getDefaultConfiguration()
    {
        if (self::$_defaultConfiguration === null) {
                throw new Exception\ConfigurationNotSetException('Unable to find an authentication.');
        }

        return self::$_defaultConfiguration;
    }

    /**
     * Sets the new default client authentication. This authentication will be used when no authentication is explicitly
     * passed to methods.
     *
     * @param  Payplug $defaultConfiguration   the new default authentication
     */
    public static function setDefaultConfiguration($defaultConfiguration)
    {
        self::$_defaultConfiguration = $defaultConfiguration;
    }
}
